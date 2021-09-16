import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export function notifyAlert (txt) {
    alert({
        delay: 4000,
        text: txt,
      });
}

export function notifyError(txt) {
    error({
        delay: 4000,
        text: txt
      });
};