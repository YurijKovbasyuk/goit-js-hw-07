import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const galleryItem = galleryItems.map((galleryItem) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="large-image.jpg"
      alt="${galleryItem.description}"
    />
  </a>
</div>`).join("");

gallery.insertAdjacentHTML('beforeend', galleryItem)

const onClickToImage = (event) => {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = event.target.parentNode.href;
  console.dir(event.target.parentNode.href);
  basicLightbox.create(`
		<img width="1400" height="900" src="${largeImg}">
	`).show()

};

gallery.addEventListener('click', onClickToImage)



