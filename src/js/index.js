import '../sass/main.scss';
import './apiService';
import addSearchQuery from './searchQuery';
import { refs } from './refs';
import './dropdown-menu';
import cardContainerMkp from '../templates/card-container.hbs';
import eventRender from './eventRender';
import paginationMkp from '../templates/pagination.hbs';
import debounce from 'lodash.debounce';

refs.form.addEventListener("input", debounce(addSearchQuery, 500))
refs.footer.insertAdjacentHTML('beforebegin', paginationMkp());
eventRender();
