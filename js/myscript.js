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

  //HEADER CHANGE BG COLOR ON SCROLL and fixing HEADER on scroll
  const toolbar = document.querySelector('.header__menu-local');
  const mainToolbar = document.querySelector('.header__menu-main-list');
  const toolbarCoord = toolbar.getBoundingClientRect().top + window.scrollY;

  window.addEventListener('scroll', function () {
    const windowScroll = window.scrollY;

    if (windowScroll > 500 && windowScroll < 1000) {
      mainToolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)'; //OLIVE
      toolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)'; //OLIVE
    } else if (windowScroll >= 1000 && windowScroll < 2000) {
      mainToolbar.style.backgroundColor = 'rgba(129,97,62, 0.8)'; //COYOTE
      toolbar.style.backgroundColor = 'rgba(129,97,62, 0.8)'; //COYOTE
    } else if (windowScroll >= 2000 && windowScroll < 3000) {
      mainToolbar.style.backgroundColor = 'rgba(85,107,47, 0.8)'; //DARK OLIVE
      toolbar.style.backgroundColor = 'rgba(85,107,47, 0.8)'; //DARK OLIVE
    } else if (windowScroll >= 3000 && windowScroll < 4000) {
      mainToolbar.style.backgroundColor = 'rgba(225,215,152,0.8)'; //LIGHT GREEN
      toolbar.style.backgroundColor = 'rgba(225,215,152,0.8)'; //LIGHT GREEN
    } else if (windowScroll >= 4000 && windowScroll < 5000) {
      mainToolbar.style.backgroundColor = 'rgba(110,161,113, 0.8)'; //SAND
      toolbar.style.backgroundColor = 'rgba(110,161,113, 0.8)'; //SAND
    } else if (windowScroll >= 5000) {
      mainToolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)';
      toolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)';
    } else {
      mainToolbar.style.backgroundColor = 'unset';
      toolbar.style.backgroundColor = 'unset';
    }

    if (windowScroll - toolbarCoord > 100) {
      toolbar.classList.add('fixed');
    } else toolbar.classList.remove('fixed');
  });
})();
