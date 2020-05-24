'use strict';

/*  MOBILE LOGO CLICK */
$('.mobile__menu__hor__list-link').click(function (event) {
  $('.mobile__logo, .mobile__menu').toggleClass('active');
});
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

let nav = $('.menu__hor');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    nav.addClass('f-nav');
  } else {
    nav.removeClass('f-nav');
  }
});
