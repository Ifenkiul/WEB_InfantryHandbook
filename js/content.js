let infoGot = sessionStorage.getItem('page');
alert(infoGot);

document.querySelector('.time').innerText = new Date().toLocaleTimeString();
document.addEventListener('click', fetchHtml);

fetchHtml();

async function fetchHtml() {
  let link = '';
  switch (infoGot) {
    case 'bimba':
      link = 'new.html';
      break;
    case 'library':
      link = 'library.html';
      break;
  }

  const response = await fetch(link);
  const html = await response.text();
  document.querySelector('.main').innerHTML = html;
}
