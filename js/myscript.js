'use strict';

/*  BURGER CLICK */
$('.header__mobile-burger').click(function (event) {
  $('.header__menu-main').toggleClass('header__menu-main-active');
  $('.header__mobile-burger').toggleClass('rotate');
});
/* BURGER CLICK */

/* MINI MENU BTN CLICK*/
window.onload = function () {
  let miniLogoClicked = true;
  const miniBtn = document.querySelector('.mini__btn');

  miniBtn.addEventListener('click', function () {
    document.querySelector('.mini__menu').classList.toggle('active');
    if (miniLogoClicked == false) {
      miniBtn.src = 'img/compass.png';
      miniLogoClicked = true;
    } else {
      miniBtn.src = 'img/compass_closed.png';
      miniLogoClicked = false;
    }
  });
};

/* MINI MENU BTN CLICK*/

let nav = $('.menu__hor');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    nav.addClass('f-nav');
  } else {
    nav.removeClass('f-nav');
  }
});
