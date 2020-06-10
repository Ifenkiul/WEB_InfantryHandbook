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
};

//ХОВАЄМО ВСІ БЛОКИ З ПІДМЕНЮ
$('.handbook__menu-content.vogneva').hide();
$('.handbook__menu-content.individual').hide();
$('.handbook__menu-content.topography').hide();
$('.handbook__menu-content.links').hide();

//функція приховує попередньо відкритий блок підменюшек
function hideMenuItem(num) {
  switch (num) {
    case 1: //VOGNEVA
      $('.handbook__menu-content.vogneva').hide();
      $('.handbook__menu-content.vogneva').toggleClass('active');
      break;

    case 2: //INDIVIDUAL
      $('.handbook__menu-content.individual').hide();
      break;

    case 3: //TOPOGRAPHY
      $('.handbook__menu-content.topography').hide();
      break;
    case 4: //USEFUL LINKS
      $('.handbook__menu-content.links').hide();
      break;
  }
}
//функція відображає відповідний блок підменю
function showMenuItem(number) {
  switch (number) {
    case 1: //VOGNEVA
      $('.handbook__menu-content.vogneva').show();
      break;

    case 2: //INDIVIDUAL
      $('.handbook__menu-content.individual').show();

      break;

    case 3: //TOPOGRAPHY
      $('.handbook__menu-content.topography').show();
      break;
    case 4: //LINKS
      $('.handbook__menu-content.links').show();
      break;
  }
}
function menuItemClick(num) {
  if (previousOpen == 0) {
    previousOpen = num;
    showMenuItem(num);
  } else if (previousOpen != num) {
    hideMenuItem(previousOpen);
    previousOpen = num;
    showMenuItem(num);
  } else {
    hideMenuItem(num);
    previousOpen = 0;
  }
}

// ЗАПИСУЮ В СХОВИЩЕ СЕССІЙНЕ ЯКУ САМЕ ТЕМУ ОБРАНО
document
  .querySelectorAll('.content__menu-link')
  .forEach(link => link.addEventListener('click', pushInfo));
function pushInfo(linkPressed) {
  const linkText = linkPressed.target.innerText;
  alert(linkText);
  let info = sessionStorage.setItem('page', linksList[linkText]);
}
