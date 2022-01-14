// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWraper = document.querySelector('.gallery');
galleryCreation();
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function galleryCreation() {
  galleryWraper.insertAdjacentHTML('afterbegin', galleryItems.map(cardCreation).join(''));
}

function cardCreation({ preview, original, description }) {
  return ` 
  
    <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  
    `;
}
