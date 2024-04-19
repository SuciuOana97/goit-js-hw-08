import { galleryItems } from './gallery-items.js';
// Change code below this line
// Descris în documentație
import SimpleLightbox from 'simplelightbox';
// Import stil
import 'simplelightbox/dist/simple-lightbox.min.css';

function imagePaletteItems() {
  const list = document.querySelector('.gallery');
  for (const photo of galleryItems) {
    //create tag img + atribute/class
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.setAttribute('src', photo.preview);
    image.setAttribute('alt', photo.description);

    //create tag li + atribute/class
    const elem = document.createElement('li');
    elem.classList.add('gallery__item');
    elem.style.listStyleType = 'none';

    //create tag a + atribute/class
    const link = document.createElement('a');
    link.setAttribute('href', photo.original);
    link.classList.add('gallery__link');

    //elements
    elem.appendChild(link);
    link.appendChild(image);
    list.appendChild(elem);

    //Disable redirect/download behavior
    link.addEventListener('click', event => {
      event.preventDefault();
    });
  }
  //animation images
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

imagePaletteItems();
console.log(galleryItems);
