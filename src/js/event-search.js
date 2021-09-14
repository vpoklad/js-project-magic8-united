import EventServiceApi from "./search-API";
import templateCard from "../templates/card.hbs"

const eventServiceApi = new EventServiceApi;
const ul = document.querySelector('.cards');
export default eventServiceApi.fetchEvent().then(res => {
  
  ul.innerHTML=templateCard(res)
});

// export default eventServiceApi.searchEventById().then(res=>console.log(res.data))