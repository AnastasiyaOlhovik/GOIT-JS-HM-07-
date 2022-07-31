import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryImg = document.querySelector(".gallery");


const imgLibrary = ImgCards(galleryItems);
galleryImg.insertAdjacentHTML("beforeend", imgLibrary);

function ImgCards(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`;
        })
        .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
});

console.log(captionDelay);
function clickBlock(e) {
    e.preventDefault();
}