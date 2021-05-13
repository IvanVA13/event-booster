const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=24&apikey=${API_KEY}`;
class EventApiService {
  constructor({query="", country=""}) {
    this.query = query
    this.country = country
  }
  async fetchEvent() {
    const response = await fetch(
      `${BASE_URL}&keyword=${this.query}&countryCode=${this.country}`,
    );
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }
}

export default EventApiService;