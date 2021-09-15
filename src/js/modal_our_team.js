const modalOurTeam = document.querySelector('[data-modal-our-team]');
const backDrop = document.querySelector('.backdrop-our-team');
const btnOurTeamClose = document.querySelector('[data-modal-close]');
const btnOurTeamOpen = document.querySelector('[data-modal-open]');



console.log(modalOurTeam);
console.log(btnOurTeamClose);
console.log(backDrop);

btnOurTeamOpen.addEventListener('click', onOpen);
btnOurTeamClose.addEventListener('click', onClose);
backDrop.addEventListener('click', onClose);
window.addEventListener('keydown', onClose);

function onOpen(e) {
    e.preventDefault();
    backDrop.classList.add('is-open');
}

function onClose(e) {
    e.preventDefault();

    const currentActive = document.querySelector('.backdrop-our-team.is-open');

    if (currentActive) {
     currentActive.classList.remove('is-open');   
    } else if ((!e.target.classList.contains('backdrop-our-team')) || (e.key !== "Escape")) {
        return;
    } 
     currentActive.classList.remove('is-open');       
}

