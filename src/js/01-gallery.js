// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')
const renderHtml = ({original, preview,description })=>{
    return ` <ul><li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      title="${description}"
    />
  </a></li></ul>`
}

const resultHtml = galleryItems.map((renderHtml)).join("")
const getRenderHtml = galleryBox.insertAdjacentHTML("beforeend",resultHtml)

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: "center"

});