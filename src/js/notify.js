import { alert, error, notice, info, success, defaults} from '../../node_modules/@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/Angeler.css';
import '@pnotify/core/Material.css';
import '@pnotify/animate/dist/PNotifyAnimate'

defaults.styling = 'angeler';
defaults.icons = 'angeler';
defaults.delay = 2500;
defaults.sticker = false;
// defaults.animateSpeed= 'slow'
defaults.shadow= false;


export function notifyAlert (txt) {
      alert({
          text: txt,
        });
  }
export function notifyError(txt) {
      error({
          text: txt,
          delay: 4000,
        });
  };
export function notifyInfo (txt) {
      info({
           text: txt,
        });
  }
export function notifySuccess (txt) {
      success({
         text: txt,
         delay: 1000,
      });
}
