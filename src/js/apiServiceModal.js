import axios from 'axios';
import {notifyAlert} from './notify.js';

const ROOT_URL = 'https://app.ticketmaster.com/discovery/v2/events';
// const ROOT_URL = 'https://app.ticketmaster.com/discovery/v2/venues';
const API_KEY  = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

export default class EventApiServiceById {
    constructor() {
        this.eventId = '';
        this.page = 1;
        this.size = 20;
    }

    async fetchEvent () {
        //const url = `${ROOT_URL}&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&apikey=${API_KEY}`;
        const url = `${ROOT_URL}/${this.eventId}?apikey=${API_KEY}`;
        try {
            const result = await axios.get(url);
            console.log('result :>> ', result);
            const data = await result.data;
            //console.log('data :>> ', data);
            //this.page += 1;
            return data;
            //return data._embedded.events[10];
        } 
        catch (error) {
            notifyAlert(error) ;
        }
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.eventId;
    }

    set query (newId) {
        this.eventId = newId;
    }
}