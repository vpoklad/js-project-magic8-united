const modalOurTeam = document.querySelector('[data-modal-our-team]');
const backDropOurTeam = document.querySelector('.backdrop-our-team__overlay');
const btnOurTeamClose = document.querySelector('[data-modal-close]');
const btnOurTeamOpen = document.querySelector('[data-modal-open]');
const logo = modalOurTeam.querySelector('.logo-goit');


btnOurTeamOpen.addEventListener('click', onOpen);
btnOurTeamClose.addEventListener('click', onCloseBtn);
backDropOurTeam.addEventListener('click', onClose);
// window.addEventListener('keydown', onClose);

function onOpen(e) {
    e.preventDefault();
    window.addEventListener('keydown', onClose);
    modalOurTeam.classList.add('is-open');
    document.body.classList.add("overlay-show")
    logo.classList.add('logo-goit-animate');
}

function onCloseBtn(e) {
    e.preventDefault();
    const currentActive = document.querySelector('.backdrop-our-team.is-open');
    if (currentActive) {
        window.removeEventListener('keydown', onClose);
        currentActive.classList.remove('is-open');
        document.body.classList.remove("overlay-show")
        logo.classList.remove('logo-goit-animate');
    }
}

function onClose(e) {
    e.preventDefault();
const currentActive = document.querySelector('.backdrop-our-team.is-open');
    if ((e.key !== "Escape") && (!e.target.classList.contains('backdrop-our-team__overlay'))){
        return;
    }
    window.removeEventListener('keydown', onClose);
    currentActive.classList.remove('is-open');
    document.body.classList.remove("overlay-show")
    logo.classList.remove('logo-goit-animate');
    
}
       


