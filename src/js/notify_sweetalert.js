import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all'

export const notify = {
    error: (text, title = "Error!") => {
        return  Swal.fire({
                icon: 'error',
                title: title,
                text: text,
                confirmButtonText: 'Ok',
                // timer: 3500
        })
    },
    success: (text, title = "success") => {
        return  Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
        })
    },
    info: (text, title = "info") => {
        return  Swal.fire({
                position: 'center',
                icon: 'info',
                title: title,
                text: text,
                showConfirmButton: false,
                timer: 3500
        })
    }
}
