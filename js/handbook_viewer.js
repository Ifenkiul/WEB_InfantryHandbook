'use strict';
(function () {
  let link = sessionStorage.getItem('page');

  fetchHtml();

  async function fetchHtml() {
    const response = await fetch(link);
    const html = await response.text();
    document.querySelector('.main').innerHTML = html;
    miniMenuBtnClick();
  }
  /* -----------------------------------MINI MENU BTN CLICK*/
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
})();
