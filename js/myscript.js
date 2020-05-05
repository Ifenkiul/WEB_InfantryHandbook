'use strict';
$(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 600,
    infinite: false,
  });
});

let previousOpen = 0;

//ХОВАЄМО ВСІ БЛОКИ З ПІДМЕНЮ
$('.main__menu-content.vogneva').hide();
$('.main__menu-content.individual').hide();
$('.main__menu-content.topography').hide();

//функція приховує попередньо відкритий блок підменюшек
function hideMenuItem(num) {
  switch (num) {
    case 1: //VOGNEVA
      $('.main__menu-content.vogneva').hide();
      $('.main__menu-content.vogneva').toggleClass('active');
      break;

    case 2: //INDIVIDUAL
      $('.main__menu-content.individual').hide();
      break;

    case 3: //TOPOGRAPHY
      $('.main__menu-content.topography').hide();
      break;
  }
}

//функція відображає відповідний блок підменю
function showSlideItem(number) {
  switch (number) {
    case 1: //VOGNEVA
      $('.main__menu-content.vogneva').show();
      break;

    case 2: //INDIVIDUAL
      $('.main__menu-content.individual').show();

      break;

    case 3: //TOPOGRAPHY
      $('.main__menu-content.topography').show();
      break;
  }
}
function menuItemClick(num) {
  if (previousOpen == 0) {
    previousOpen = num;
    showSlideItem(num);
  } else if (previousOpen != num) {
    hideMenuItem(previousOpen);
    previousOpen = num;
    showSlideItem(num);
  } else {
    hideMenuItem(num);
    previousOpen = 0;
  }
}

/*  MOBILE LOGO CLICK */
$('.mobile__logo').click(function (event) {
  $('.mobile__logo, .mobile__menu').toggleClass('active');
});
/*  MOBILE LOGO CLICK */

/* MINI MENU BTN CLICK*/
let miniLogoClicked = true;
$('.mini__btn').click(function (event) {
  $('.mini__btn,.mini__menu').toggleClass('active');
  if (miniLogoClicked == false) {
    $('.mini__btn').attr('src', 'img/compass.png');
    miniLogoClicked = true;
  } else {
    $('.mini__btn').attr('src', 'img/compass_closed.png');
    miniLogoClicked = false;
  }
});
/* MINI MENU BTN CLICK*/
