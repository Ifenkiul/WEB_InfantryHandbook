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

let menuHidden = 0;
let localOpen = 0;
let previousOpen = 0;

//ХОВАЄМО ВСІ БЛОКИ З ПІДМЕНЮ
$('.menu__content__vogneva').hide();
$('.menu__content__individual').hide();
$('.menu__content__topography').hide();

//функція приховує попередньо відкритий блок підменюшек
function hideMenuItem(num) {
  switch (num) {
    case 1: //VOGNEVA
      $('.menu__content__vogneva').hide();
      break;

    case 2: //INDIVIDUAL
      $('.menu__content__individual').hide();
      break;

    case 4: //TOPOGRAPHY
      $('.menu__content__topography').hide();
      break;
  }
}

//функція відображає відповідний блок підменю
function showSlideItem(number) {
  switch (number) {
    case 1: //VOGNEVA
      $('.menu__content__vogneva').show();
      if (previousOpen != 0 && localOpen != 1) {
        hideMenuItem(previousOpen);
      }
      localOpen = 1;
      previousOpen = 1;

      break;

    case 2: //INDIVIDUAL
      $('.menu__content__individual').show();
      if (previousOpen != 0 && localOpen != 2) {
        hideMenuItem(previousOpen);
      }
      localOpen = 2;
      previousOpen = 2;
      break;

    case 4: //TOPOGRAPHY
      $('.menu__content__topography').show();
      if (previousOpen != 0 && localOpen != 4) {
        hideMenuItem(previousOpen);
      }
      localOpen = 4;
      previousOpen = 4;
      break;
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
