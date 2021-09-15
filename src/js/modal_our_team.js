// const ourTemItems = [
//     {
//         photo: './images/Rectangle6.png',
//         title: 'Victor Poklad',
//         location: 'kharkiv',
//         linkedin: 'https://github.com/OlhaTsyhanenko',
//         github: 'https://github.com/OlhaTsyhanenko',    
//     },
//     {
//         photo: './images/Rectangle6.png',
//         title: 'Victor Chernich',
//         location: 'Chernigov',
//         linkedin: 'https://github.com/OlhaTsyhanenko',
//         github: 'https://github.com/OlhaTsyhanenko',
//     },
// ];

// const ourTeam = document.querySelector('.js-our-team');
// const memberAdd = addItemImages(ourTemItems);

// function addItemImages(ourTemItems) {
//     return ourTemItems.map(({ photo, title, location, linkedin, github }) => {
//     return `<li class="our-team__item">
//         <img class="item__img" src="${photo}" alt="${title}" width="180" />
//         <p class="item__title">${title}</p>
//         <p class="item__location">
//           <svg width="7" height="10" class="item__icon">
//             <use href="./images/sprite.svg#icon-location"></use>
//           </svg>
//           ${location}
//         </p>
//         <ul class="list social">
//           <li class="social__item">
//             <a
//               href="${linkedin}"
//               class="link social__link"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="linkedin"
//             >
//               <svg class="social__icon">
//                 <use href="./images/sprite.svg#icon-linkedin"></use>
//               </svg>
//             </a>
//           </li>
//           <li>
//             <a
//               href="${github}"
//               class="link social__link"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="github"
//             >
//               <svg class="social__icon">
//                 <use href="./images/sprite.svg#icon-github"></use>
//               </svg>
//             </a>
//           </li>`;
//   })
//     .join('');
// }
// ourTeam.insertAdjacentHTML('afterbegin',memberAdd);





const modalOurTeam = document.querySelector('[data-modal-our-team]');
const backDropOurTeam = document.querySelector('.backdrop-our-team__overlay');
const btnOurTeamClose = document.querySelector('[data-modal-close]');
const btnOurTeamOpen = document.querySelector('[data-modal-open]');
const logo = modalOurTeam.querySelector('.logo-goit');


btnOurTeamOpen.addEventListener('click', onOpen);
btnOurTeamClose.addEventListener('click', onCloseBtn);
backDropOurTeam.addEventListener('click', onClose);
window.addEventListener('keydown', onClose);

function onOpen(e) {
    e.preventDefault();

    modalOurTeam.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    logo.classList.add('logo-goit-animate');
}

function onCloseBtn(e) {
    e.preventDefault();
    const currentActive = document.querySelector('.backdrop-our-team.is-open');
    if (currentActive) {
        currentActive.classList.remove('is-open');
        document.body.style.overflow = '';
        logo.classList.remove('logo-goit-animate');
    }
}

function onClose(e) {
    e.preventDefault();
const currentActive = document.querySelector('.backdrop-our-team.is-open');
    if ((e.key !== "Escape") && (!e.target.classList.contains('backdrop-our-team__overlay'))){
        return;
    }
    
    currentActive.classList.remove('is-open');
    document.body.style.overflow = '';
    logo.classList.remove('logo-goit-animate');
    
}
       


