import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryCards = document.querySelector(".gallery");


const imgConteiner = creatImgCards(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", imgConteiner);

function creatImgCards(galleryItems) {
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
function BlockEventClickLoad(e) {
    e.preventDefault();
}