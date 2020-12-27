
let previousOpen = 0;

//---------------------HANDBOOK
function toggleVisibility(element) {
  if(element.hidden) {
    element.hidden = false;
  } else {
    element.hidden = true;
  }
}

function handbookTitleClick(event) {
  const currentElement = event.currentTarget;
  toggleVisibility(currentElement.nextElementSibling);
}

document
  .querySelectorAll('.topic_title')
  .forEach(element => element.addEventListener('click', handbookTitleClick));



// ЗАПИСУЮ В СХОВИЩЕ СЕССІЙНЕ ЯКУ САМЕ ТЕМУ ОБРАНО
document.querySelectorAll('.content__menu-link').forEach(link =>
  link.addEventListener('click', linkPressed => {
    sessionStorage.setItem('page', linkPressed.target.dataset.url);
  }),
);

