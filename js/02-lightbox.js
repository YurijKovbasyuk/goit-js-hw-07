import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const galleryItem = galleryItems.map((galleryItem) =>
    `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`).join("");

gallery.insertAdjacentHTML('beforeend', galleryItem)


const onClickToImage = (event) => {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
    return;
    }

  const largeImg = event.target.parentNode.href;
  console.dir(event.target.parentNode.href);
  
};

gallery.addEventListener('click', onClickToImage)

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.85,
  captionsData: 'alt',
  scrollZoomFactor: 0.05,
  captionDelay: 250,
})