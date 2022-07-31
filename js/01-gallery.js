import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(".gallery");


const imgGallery= imgCard(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, imgGallery);


function imgCard(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        })
        .join("");
}

gallery.addEventListener("click", OpenClickModal);

function OpenClickModal(event) {
    clickBlock(event);

    if (event.target.nodeName !== "IMG") {
        return;
    }
    modalBigImg();
};



function modalBigImg() {
    const card = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    
`);
    card.show(card);
    if (card.visible()) {
        window.addEventListener("keydown", closeEsc);
    }

    function closeEsc(e) {
        if (e.code === "Escape") {
            card.close();
            window.removeEventListener("keydown", closeEsc);
            return;
        }
    }
};



function clickBlock(event) {
    event.preventDefault();
}