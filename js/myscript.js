'use strict';
(function () {
  /*  BURGER CLICK */
  document
    .querySelector('.header__mobile-burger')
    .addEventListener('click', function () {
      document
        .querySelector('.header__menu-main')
        .classList.toggle('header__menu-main-active');
      document
        .querySelector('.header__mobile-burger')
        .classList.toggle('rotate');
    });

  /* BURGER CLICK */

  /* MINI MENU BTN CLICK*/
  miniMenuBtnClick();

  function miniMenuBtnClick() {
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
  }

  /* MINI MENU BTN CLICK*/

  //ФІКСАЦІЯ ГОЛОВНОГО МЕНЮ ПРИ СКРОЛІ
  const toolbar = document.querySelector('.header__menu-local');
  const toolbarCoord = toolbar.getBoundingClientRect().top + window.scrollY;
  window.addEventListener('scroll', function () {
    if (window.scrollY - toolbarCoord > 100) {
      toolbar.classList.add('fixed');
    } else toolbar.classList.remove('fixed');
  });
})();
