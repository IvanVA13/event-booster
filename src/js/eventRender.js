import EventApiService from './apiService';
import { refs } from './refs';
import cardContainerMkp from '../templates/card-container.hbs';
export const searchOptions = {query: "", country: ""}

  export const eventRender = async () => {
    const eventApiService = new EventApiService(searchOptions);
  try {
    const result = await eventApiService.fetchEvent();
    refs.cardContainer.insertAdjacentHTML(
      'beforeend',
      cardContainerMkp(result),
    );
  } catch (error) {
    console.log('Error');
  } finally {
    refs.spinner.classList.add('hidden');
  }
};
