import refs from './refs.js';

refs.buttonClose.addEventListener("click", onCloseMainModal);
refs.backdrop.addEventListener("click", onBackdropClick);

document.addEventListener("keydown",

function closeMainModalESC(e) {
    if (e.key === "Escape") {
    onCloseMainModal();
    }
});

function onCloseMainModal() {
    refs.overlay.classList.add("is-hidden");
}

function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseMainModal();
    }
}

export default onCloseMainModal;
