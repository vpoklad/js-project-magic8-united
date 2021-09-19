import refs from './refs';

window.onload = function () {
    setTimeout(() => {
      hideLoader();
    }, 1200);
  };
  
  function showLoader() {
    refs.preloader.classList.remove('visually-hidden');
  }
  function hideLoader() {
    refs.preloader.classList.add('visually-hidden');
  }

  export {showLoader, hideLoader}
