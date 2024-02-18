'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imgPix } from './js/pixabay-api';

import icon from './img/x-icon.svg';

const searchForm = document.querySelector('.form');
const containerForImages = document.querySelector('.container-imgs');
const loadDiv = document.querySelector('.hidden-load');

const imgSearch = new imgPix();

function imgCreate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  const container = `<div class="gallery">
  <div class="container-img-wrap">
    <a href="${largeImageURL}" class="img-link">
        <img src="${webformatURL}" alt="${tags}" title="${tags}" />
      </a>
  </div>
  <table border="0" class="image-descrip">
    <tr class="td-descrip">
      <td>Likes</td>
      <td>Views</td>
      <td>Comments</td>
      <td>Downloads</td>
    </tr>
    <tr class="td-result">
      <td>${likes}</td>
      <td>${views}</td>
      <td>${comments}</td>
      <td>${downloads}</td>
    </tr>
  </table>
</div>`;

  return container;
}

function imgsCreate(images) {
  return images.map(imgCreate).join('');
}

function renderImages(images) {
  const markup = imgsCreate(images);
  containerForImages.innerHTML = markup;
  lightBoxShow();
}

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  loadDiv.classList.add('loader');

  const userKeyWord = document.querySelector('[data-userInput]').value.trim();

  imgSearch
    .getImage(userKeyWord)
    .then(data => {
      if (data.totalHits > 0) {
        const img = data.hits;
        renderImages(img);
      } else {
        iziToast.show({
          position: 'topRight',
          iconUrl: icon,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FFFFFF',
          messageSize: '16',
          messageLineHeight: '15',
          backgroundColor: '#EF4040',
          timeout: 5000,
          displayMode: 2,
          close: true,
          closeOnEscape: true,
          closeOnClick: true,
        });
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loadDiv.classList.remove('loader');
    });

  e.target.reset();
}

function lightBoxShow() {
  const lightbox = new SimpleLightbox('.container-img-wrap a', {
    close: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionsPosition: 'bottom',
    animationSpeed: 10,
    captionSelector: 'img',
    enableKeyboard: true,
    loop: true,
  });

  lightbox.on('show.simplelightbox');
  lightbox.refresh();
}

document
  .querySelector('[data-userInput]')
  .addEventListener('input', function () {
    containerForImages.innerHTML = '';
  });
