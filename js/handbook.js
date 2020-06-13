'use strict';
let previousOpen = 0;
const linksList = {
  'Явище пострілу': '',
  'Розвідка цілей': 'vogneva/scouting_01.html',
  'Кутові величини': 'vogneva/angles.html',
  'Правила стрільби стрілецька зброя': 'vogneva/how_to_shoot_gun.html',
  'АК-47М': 'vogneva/ak47.html',
  'АК-74': 'vogneva/ak74.html',
  'РПК-74': 'vogneva/rpk74.html',
  'ПК (ПКМ)': 'vogneva/pk.html',
  'РПГ-7В': 'vogneva/rpg.html',
  'Ручні уламкові гранати': 'vogneva/grenades.html',
  'ГП-25': 'vogneva/gp25.html',
  ДШКМ: 'vogneva/dashka.html',
  'НСВ Утес': 'vogneva/utes.html',
  'АГС-17 Пламя': 'vogneva/ags17.html',
  'СПГ-9 Копье': 'vogneva/spg9.html',
};

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
document
  .querySelectorAll('.content__menu-link')
  .forEach(link => link.addEventListener('click', pushInfo));

function pushInfo(linkPressed) {
  const linkText = linkPressed.target.innerText;
  sessionStorage.setItem('page', linksList[linkText]);
}

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
