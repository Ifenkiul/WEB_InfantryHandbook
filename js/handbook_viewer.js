'use strict';
(function () {
  const link = localStorage.getItem('page');

  fetchHtml();

  async function fetchHtml() {
    const response = await fetch(link);
    const html = await response.text();
    document.querySelector('.main').innerHTML = html;
  }
})();
