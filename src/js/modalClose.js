import refs from './refs.js';

refs.buttonClose.addEventListener("click", onCloseMainModal);
refs.overlay.addEventListener("click", onBackdropClick);

document.addEventListener("keydown",

function closeMainModalESC(e) {
    if (e.key === "Escape") {
    onCloseMainModal();
    }
});

function onCloseMainModal() {
    refs.overlay.classList.add("is-hidden");
    document.body.classList.remove("overlay-show")
}

function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseMainModal();
    }
}

export default onCloseMainModal;
