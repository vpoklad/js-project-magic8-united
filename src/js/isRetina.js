export let isRetina;

// document.addEventListener("DOMContentLoaded", isRetinaScreen);
window.addEventListener("DOMContentLoaded", isRetinaScreen);

function isRetinaScreen(){/*проверка Retina*/
    isRetina = ((window
      .matchMedia && (window
        .matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)')
        .matches || window
        .matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g
        .test(navigator.userAgent);
   }