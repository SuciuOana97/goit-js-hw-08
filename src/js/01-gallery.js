// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Described in documentation;

import SimpleLightbox from 'simplelightbox';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';
function imagePaletteItems() {
  const list = document.querySelector('.gallery');
  for (const photo of galleryItems) {
    //creare tag img + atribute/clasa
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.setAttribute('src', photo.preview);
    image.setAttribute('alt', photo.description);

    //creare tag li + atribute/clasa
    const elem = document.createElement('li');
    elem.classList.add('gallery__item');
    elem.style.listStyleType = 'none';

    //creare tag a + atribute/clasa
    const link = document.createElement('a');
    link.setAttribute('href', photo.original);
    link.classList.add('gallery__link');

    //aranjare elemente
    elem.appendChild(link);
    link.appendChild(image);
    list.appendChild(elem);

    //Dezactivare comportament redirectionare/download
    link.addEventListener('click', event => {
      event.preventDefault();
    });
  }
  //Animatie imagini
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

imagePaletteItems();
console.log(galleryItems);
