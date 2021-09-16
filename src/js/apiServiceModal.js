import axios from 'axios';
import {notifyAlert} from './notify.js';

const ROOT_URL = 'https://app.ticketmaster.com/discovery/v2/events';
// const ROOT_URL = 'https://app.ticketmaster.com/discovery/v2/venues';
const API_KEY  = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

export default class EventApiServiceById {
    constructor() {
        this.id = '';
        //this.page = 1;
        //this.size = 20;
    }

    async fetchEvent () {
        const url = `${ROOT_URL}/${this.id}?apikey=${API_KEY}`;
        try {
            const result = await axios.get(url);
            //console.log('result :>> ', result);
            const data = await result.data;
            //console.log('data :>> ', data);
            //this.page += 1;
            return data;
        } 
        catch (error) {
            notifyAlert(error) ;
        }
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.id;
    }

    set query (newId) {
        this.id = newId;
    }
}