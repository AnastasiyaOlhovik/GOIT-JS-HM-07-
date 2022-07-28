import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(".gallery");


const imgConteiner = creatImgCards(galleryItems);
gallery.insertAdjacentHTML("beforeend", imgConteiner);


function creatImgCards(galleryItems) {
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

// click

gallery.addEventListener("click", onOpenClickModal);

function onOpenClickModal(event) {
    BlockEventClickLoad(event);

    if (event.target.nodeName !== "IMG") {
        return;
    }
    modalBigImageOn();
};



function modalBigImageOn() {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    
`);
    instance.show(instance);
    if (instance.visible()) {
        window.addEventListener("keydown", onCloseKeyEsc);
    }

    function onCloseKeyEsc(e) {
        if (e.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onCloseKeyEsc);
            return;
        }
    }
};



function BlockEventClickLoad(event) {
    event.preventDefault();
}