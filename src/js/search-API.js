import axios from 'axios';
import { notifyAlert, notifySuccess } from './notify.js';
import { eventsModif, eventModif } from './eventModification.js';

const ROOT_URL = 'https://app.ticketmaster.com/discovery/v2/';
const KEY = 'y2gr3zDEoAnck6YziFkTdrHptQULpZRO';
class EventServiceApi {
  constructor() {
    this.page = 0;
    this.totalPages = '';
    this.searchQuery = '';
    this.countryQuery = '';
    this.eventId = '';
    this.totalEvents = '';
  }

  fetchEvent() {
    let url = `${ROOT_URL}events.json?&page=${this.page}&keyword=${this.searchQuery}&apikey=${KEY}`;

    if (this.countryQuery !== '') {
      url = `${ROOT_URL}events.json?&page=${this.page}&countryCode=${this.countryQuery}&keyword=${this.searchQuery}&apikey=${KEY}`;
    }

    return axios
      .get(url)
      .then(result => {
        if (!result.data._embedded) {
          notifyAlert('Looks like there is no such even!');
          // console.log("Looks like there is no such even!");
          return;
        }

        try {
          // this.page += 1;
          // console.log(result);
          //console.log('result :>> ', result);
          this.totalEvents = result.data.page.totalElements;
          this.totalPages = result.data.page.totalPages;
          // console.log(this.totalPages);
          // arrEvents = result.data._embedded.events;
          // console.log('arrEvents :>> ', arrEvents);
          notifySuccess(`Your request "${this.searchQuery}" in "${this.countryQuery}" has been successfully processed!
          Found ${this.totalEvents} events.`);
            
          return result.data._embedded.events;
          return eventsModif(result.data._embedded.events);
            
        } catch (error) {
          // Поставить Нотификашку для отлова ошибки
          console.log('try catch', error);
        }
      })
      .catch(err => {
        console.log('catch', err);
      });
  }

  async searchEventById() {
    try {
      const result = await axios.get(`${ROOT_URL}events/${this.eventId}?apikey=${KEY}`);
      const data = await result.data;
      return eventModif(data);
    } catch (error) {
      notifyAlert(error);
    }
  }

  pageReset() {
    this.page = 0;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    if (this.page === 1) {
      return;
    }
    this.page -= 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get selectQuery() {
    return this.countryQuery;
  }
  set selectQuery(newSelectQuery) {
    this.countryQuery = newSelectQuery;
  }

  get queryId() {
    return this.eventId;
  }
  set queryId(newId) {
    this.eventId = newId;
  }
}
const eventServiceApi = new EventServiceApi();
export default eventServiceApi;
