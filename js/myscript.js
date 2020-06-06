'use strict';

/*  BURGER CLICK */
$('.header__mobile-burger').click(function (event) {
  $('.header__menu-main').toggleClass('header__menu-main-active');
  $('.header__mobile-burger').toggleClass('rotate');
});
/* BURGER CLICK */

let nav = $('.menu__hor');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    nav.addClass('f-nav');
  } else {
    nav.removeClass('f-nav');
  }
});
