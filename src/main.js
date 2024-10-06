import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, renderLoader, renderToastOnError, renderToastOnSearchEmpty } from './js/render-functions.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const searchResultContainer = document.querySelector('.search-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchResultContainer.innerHTML = '';
  renderLoader(searchResultContainer);
  fetchImages(input.value)
    .then((images) => {
      if (images.hits.length === 0) {
        renderToastOnSearchEmpty(searchResultContainer);
      }
      renderGallery(searchResultContainer, images.hits);
      console.log(images);
      console.log(images);
    })
    .catch(() => {
      renderToastOnError(searchResultContainer);
    });
});

