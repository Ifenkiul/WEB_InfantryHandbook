'use strict';

/*  BURGER CLICK */
$('.header__mobile-burger').click(function (event) {
  $('.header__menu-main').toggleClass('header__menu-main-active');
});
/* BURGER CLICK */

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

let nav = $('.menu__hor');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    nav.addClass('f-nav');
  } else {
    nav.removeClass('f-nav');
  }
});
