'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imgPix } from './js/pixabay-api';

import icon from './img/x-icon.svg';

import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.form');
const containerForImages = document.querySelector('.container-imgs');
const loadDiv = document.querySelector('.hidden-load');
const loadMorePictures = document.querySelector('.load-morepics');
const userKeyWordInput = document.querySelector('[data-userInput]');

const imgSearch = new imgPix();

let page = 1;

searchForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const userKeyWord = userKeyWordInput.value.trim();
  page = 1;
  onSubmit(userKeyWord);
});

loadMorePictures.addEventListener('click', e => {
  e.preventDefault();
  const userKeyWord = userKeyWordInput.value.trim();
  loadMore(userKeyWord);
});

function loadMore(userKeyWord) {
  let newPage = page + 1;

  imgSearch
    .getImage(userKeyWord, newPage)
    .then(data => {
      let maxPages = Math.ceil(data.totalHits / 20);
      if (newPage <= maxPages) {
        loadMorePictures.classList.add('load-morepics-on');
        renderImages(data.hits);
        return;
      } else {
        loadMorePictures.classList.remove('load-morepics-on');
      }
    })
    .catch(err => {
      console.error('Error loading images:', err);
      loadMorePictures.classList.remove('load-morepics-on');
    });
  page++;
}

function onSubmit(userKeyWord) {
  loadDiv.classList.add('loader');

  imgSearch
    .getImage(userKeyWord, page)
    .then(data => {
      if (data.totalHits > 0) {
        const img = data.hits;
        renderImages(img);
        lightBoxShow();
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
      loadMorePictures.classList.remove('load-morepics-on');
      lightbox.on('show.simplelightbox');
    })
    .finally(() => {
      loadDiv.classList.remove('loader');
      loadMorePictures.classList.add('load-morepics-on');
    });
  loadMore(userKeyWord);
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
