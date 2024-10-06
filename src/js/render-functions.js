import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightboxGallery = new SimpleLightbox('.search-result li a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const renderToastOnSearchEmpty = (parentContainer) => {
  parentContainer.innerHTML = '';
  iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
};

export const renderGallery = (parentContainer, images) => {
  parentContainer.innerHTML = images.map(renderImage).join('');
  simpleLightboxGallery.refresh();
  console.log('simpleLightboxGallery', simpleLightboxGallery);
};

export const renderLoader = (parentContainer) => {
  parentContainer.innerHTML = `<span class='loader'/>`;
};

const renderImage = (image) => {
  return `
    <li class='search-result-item'>
      <a href='${image.largeImageURL}'>
        <img class='search-result-item-image' src='${image.webformatURL}' alt='${image.tags}'/>
      </a>
      <ul class='search-result-item-text'>
        <li class='field'>
          <div class='label'>
            Likes
          </div>
          <div class='value'>
            ${image.likes}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Views
          </div>
          <div class='value'>
            ${image.views}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Comments
          </div>
          <div class='value'>
            ${image.comments}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Downloads
          </div>
          <div class='value'>
            ${image.downloads}
          </div>
        </li>
      </ul>
    </li>
  `;
};