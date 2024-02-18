'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imgPix } from './js/pixabay-api';

import icon from './img/x-icon.svg';

const searchForm = document.querySelector('.form');
const containerForImages = document.querySelector('.container-imgs');

const imgSearch = new imgPix();

function imgCreate({
  largeImageURL,
  previewURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  const container = `<div class="gallery">
    <a href="${largeImageURL}">
    <img src="${previewURL}" alt="${tags}" title="${tags}"/>
    </a>
    <table border="1">
  <tr>
    <td>Likes</td>
    <td>Views</td>
    <td>Comments</td>
    <td>Downloads</td>
  </tr>
  <tr>
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
}

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

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
          messageSize: '20px',
          messageLineHeight: '1.6',
          backgroundColor: '#EF4040',
          timeout: 1115000,
          displayMode: 2,
          close: false,
          closeOnEscape: true,
          closeOnClick: true,
        });
      }
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}
