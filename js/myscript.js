'use strict';
$(function () {
  $('.slider').slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="img/next.png"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="img/prev.png"></button>',
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

function hideHide(argument) {
  if (menuHidden === 0) {
    $('#menu-mini').hide();
    $('.eye').attr('src', 'img/eye.png');
    menuHidden = 1;
  } else {
    $('#menu-mini').show();
    $('.eye').attr('src', 'img/closed.png');
    menuHidden = 0;
  }
}
