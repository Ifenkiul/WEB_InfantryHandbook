'use strict';

/** +++++++++++++++++++++++++++MENU HORIZONTA:L FIXING  and HIGHLITING++++++++++++++++++*/
let nav = $('.menu__hor');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    nav.addClass('f-nav');
  } else {
    nav.removeClass('f-nav');
  }
  let handbookTop = $('.main__menu').offset().top;
  let linksTop = $('.usefulLinks').offset().top;
  let scrTop = $(this).scrollTop();
  if (scrTop < handbookTop) {
    $('.menu__hor__list-link.index').addClass('active');
  } else {
    $('.menu__hor__list-link.index').removeClass('active');
  }
  if (scrTop > handbookTop && scrTop < linksTop) {
    $('.menu__hor__list-link.handbook').addClass('active');
  } else {
    $('.menu__hor__list-link.handbook').removeClass('active');
  }

  if (scrTop > linksTop) {
    $('.menu__hor__list-link.links').addClass('active');
  } else {
    $('.menu__hor__list-link.links').removeClass('active');
  }
});
/** +++++++++++++++++++++++++++MENU HORIZONTA:L FIXING  and HIGHLITING++++++++++++++++++*/

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
