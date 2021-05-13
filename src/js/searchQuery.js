import { refs } from './refs';
import {eventRender} from './eventRender';
import {searchOptions} from './eventRender';

export const addSearchQuery = el => {
  if (el.target.name === 'search') {
    searchEvents({query: el.target.value})
  } else {
    return;
  }
};

export function onCountrySearch() {
  searchEvents({country: this.value})
}

const searchEvents = value => {
  refs.cardContainer.innerHTML = '';
  refs.spinner.classList.remove('hidden');
  searchOptions[Object.keys(value)[0]] = Object.values(value)[0]
  eventRender();
};

export default { addSearchQuery, onCountrySearch };
