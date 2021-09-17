import '../../node_modules/izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast/dist/js/iziToast';
// iziToast.show({
//     title: 'Hello World!',
//     message: 'I am a basic toast message!'
// });


export const notify = {
    warning: (message, title = "Warning") => {
        return  iziToast.warning({
                title: title,
                message: "Please enter you request!",
                position: "topCenter"
        })
    },
    error: (message, title = "Error") => {
        return  iziToast.error({
                title: title,
                message: "Looks like there is no such even!",
                position: "topCenter"
        })
    }
}
