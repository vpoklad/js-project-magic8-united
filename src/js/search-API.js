import axios from 'axios';
import { notifyAlert, notifyError, notifyInfo, notifySuccess} from './notify.js';
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
    };

    return axios
      .get(url)
      .then(result => {
        try {
          this.totalEvents = result.data.page.totalElements;
          this.totalPages = result.data.page.totalPages;
          return eventsModif(result.data._embedded.events);
        } catch (error) {
          console.log(error, "search-API");
        }
      })
      .catch(err => {
        notifyError(err);
        console.log('catch', err);
      });
  }

  async searchEventById() {
    try {
      const result = await axios.get(`${ROOT_URL}events/${this.eventId}?apikey=${KEY}`);
      const data = await result.data; 
      const arrEvt = await eventsModif([data]); 
      return (arrEvt[0]);
      //return ...eventsModif([data]);
    } catch (error) {
      notifyError(error);
    }
  }

  pageReset() {
    this.page = 0;
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
