import axios from 'axios';
const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/";
const KEY = "y2gr3zDEoAnck6YziFkTdrHptQULpZRO";


export default class EventServiceApi {
  constructor() {
    this.page = 1;
    this.searchQuery = "";
    // this.countryQuery = "";
    this.eventId = "";
  }

  async fetchEvent() {
    return await axios.get(`${ROOT_URL}events.json?&page=${this.page}&keyword=${this.searchQuery}&apikey=${KEY}`).then(result => {
      try {
        // this.page += 1;
        // console.log(result);
        // console.log(result.data._embedded.events);
        return result.data._embedded.events;
      } catch (error) {
        // Поставить Нотификашку для отлова ошибки
        if (result.data.page.totalElements === 0) {
          console.log("Looks like there is no such even!");
        }
      }
    }).catch(err => {
      console.log(err)
    }) 
  }

  searchEventById() {
    return axios.get(`${ROOT_URL}events/${this.eventId}.json?apikey=${KEY}`).then(data => {
      console.log(data);
      return data
    })
  }

  pageReset(){
      this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    if (this.page === 1) {
      return
    }
    this.page -= 1;
   }
  
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}