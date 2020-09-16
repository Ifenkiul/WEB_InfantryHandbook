'use strict';
let previousOpen = 0;

//---------------------HANDBOOK
document
  .querySelectorAll('.handbook__menu-topic')
  .forEach(element => element.addEventListener('click', handbookClick));

function handbookClick(event) {
  const linkText = event.currentTarget.innerText;
  switch (linkText) {
    case 'ВОГНЕВА ПІДГОТОВКА':
      document
        .querySelector('.handbook__menu-content.vogneva')
        .classList.toggle('visible');
      break;

    case 'ІНДИВІДУАЛЬНА ПІДГОТОВКА':
      document
        .querySelector('.handbook__menu-content.individual')
        .classList.toggle('visible');
      break;

    case 'ВІЙСЬКОВА ТОПОГРАФІЯ':
      document
        .querySelector('.handbook__menu-content.topography')
        .classList.toggle('visible');
      break;
  }
}

// ЗАПИСУЮ В СХОВИЩЕ СЕССІЙНЕ ЯКУ САМЕ ТЕМУ ОБРАНО
document.querySelectorAll('.content__menu-link').forEach(link =>
  link.addEventListener('click', linkPressed => {
    sessionStorage.setItem('page', linkPressed.target.dataset.url);
  }),
);

//--------------------------------LIBRARY
document
  .querySelectorAll('.handbook__library__item-title')
  .forEach(element => element.addEventListener('click', libraryClick));

function libraryClick(event) {
  const linkText = event.currentTarget.innerText;
  switch (linkText) {
    case 'ВОГНЕВА ПІДГОТОВКА':
      document
        .querySelector('.handbook__library__item-content.vogneva')
        .classList.toggle('visible');
      break;
    case 'ТОПОГРАФІЯ':
      document
        .querySelector('.handbook__library__item-content.topography')
        .classList.toggle('visible');
      break;
  }
}
