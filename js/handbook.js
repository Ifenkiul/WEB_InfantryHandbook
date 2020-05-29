let previousOpen = 0;

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
