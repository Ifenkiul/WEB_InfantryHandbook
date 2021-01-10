
let previousOpen = 0;
const cardsList = {
  ".handbook__menu-container.vogneva": [
    {
      "dataUrl": "vogneva/books.html",
      "imgSrc": "img/handbook/books.jpg",
      "cardTitle": "Книги. Збірники."
    },
    {
      "dataUrl": "vogneva/scouting_01.html",
      "imgSrc": "img/handbook/scouting.jpg",
      "cardTitle": "Розвідка цілей."
    },
    {
      "dataUrl": "vogneva/angles.html",
      "imgSrc": "img/handbook/angles.jpg",
      "cardTitle": "Кутові величини"
    },
    {
      "dataUrl": "vogneva/how_to_shoot_gun.html",
      "imgSrc": "img/handbook/howtoshoot.jpg",
      "cardTitle": "Правила стрільби. Стрілецька зброя"
    },
    {
      "dataUrl": "vogneva/ak47.html",
      "imgSrc": "img/handbook/ak47.jpg",
      "cardTitle": "АК-47М"
    },
    {
      "dataUrl": "vogneva/ak74.html",
      "imgSrc": "img/handbook/ak74.jpg",
      "cardTitle": "АК-74"
    },
    {
      "dataUrl": "vogneva/rpk74.html",
      "imgSrc": "img/handbook/rpk74.jpg",
      "cardTitle": "РПК-74"
    },
    {
      "dataUrl": "vogneva/pk.html",
      "imgSrc": "img/handbook/pk.jpg",
      "cardTitle": "ПК"
    },
    {
      "dataUrl": "vogneva/rpg.html",
      "imgSrc": "img/handbook/rpg.jpg",
      "cardTitle": "РПГ-7В"
    },
    {
      "dataUrl": "vogneva/grenades.html",
      "imgSrc": "img/handbook/grenades.jpg",
      "cardTitle": "Ручні уламкові гранати"
    },
    {
      "dataUrl": "vogneva/gp25.html",
      "imgSrc": "img/handbook/gp25.jpg",
      "cardTitle": "ГП-25"
    },
    {
      "dataUrl": "vogneva/pm.html",
      "imgSrc": "img/handbook/books.jpg",
      "cardTitle": "ПМ"
    },
    {
      "dataUrl": "vogneva/dashka.html",
      "imgSrc": "img/handbook/dashka.jpg",
      "cardTitle": "ДШКМ"
    },
    {
      "dataUrl": "vogneva/utes.html",
      "imgSrc": "img/handbook/utes.jpg",
      "cardTitle": "НСВ 'Утес'"
    },
    {
      "dataUrl": "vogneva/ags17.html",
      "imgSrc": "img/handbook/ags17.jpg",
      "cardTitle": "АГС-17 'Пламя'"
    },
    {
      "dataUrl": "vogneva/spg9.html",
      "imgSrc": "img/handbook/spg9.jpg",
      "cardTitle": "СПГ-9 'Копье'"
    },
    {
      "dataUrl": "vogneva/svd.html",
      "imgSrc": "img/handbook/books.jpg",
      "cardTitle": "СВД"
    },
    {
      "dataUrl": "vogneva/nightSight.html",
      "imgSrc": "img/handbook/books.jpg",
      "cardTitle": "Нічні приціли"
    }
  ],
  ".handbook__menu-container.individual": [
      {
        "dataUrl": "individual/basic.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "БАЗА"
      },
      {
        "dataUrl": "individual/berkut.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Ігор Беркут. Посібник з індивідуальної підготовки."
      }
    ],
    ".handbook__menu-container.topography": [
      {
        "dataUrl": "topography/books.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Книги. Посібники."
      },
      {
        "dataUrl": "topography/01orientation.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Орієнтування на місцевості. Цілевказання."
      },
      {
        "dataUrl": "topography/02vectors.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Визначення напряму на сторони горизонту"
      },
      {
        "dataUrl": "topography/03azimut.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Магнітний азимут"
      },
      {
        "dataUrl": "topography/problems.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Вирішення задач"
      },
      {
        "dataUrl": "topography/04angles_distances.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Визначення кутів та відстаней на місцевості "
      },
      {
        "dataUrl": "topography/coordinates.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Координати цілі за даними з СП"
      },
      {
        "dataUrl": "topography/maps.html",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Топографічні карти "
      }
    ]
}

// ------------------------------------ DYNAMIC INPUT of SUBJECT CARDS
function loadHandbookCards(){
  const cardTemplate = `
  <a class="content__menu-link" href="handboook_viewer.html"
  data-url='{0}'
  >
    <img src="{1}" class="handbook_card-image">
    <p class="handbook_card-title">{2}</p>
  </a>`;
  for (let key in cardsList){
    console.log(key);
    const currentBlock = document.querySelector(key);
    console.log(currentBlock);
    for (let i = 0; i < cardsList[key].length; i++){
      const currentArrayElement = cardsList[key][i];
      const currentElement = document.createElement('div');
      currentElement.classList.add('handbook_card');
      currentElement.innerHTML = cardTemplate
        .replace("{0}", currentArrayElement.dataUrl)
        .replace('{1}', currentArrayElement.imgSrc)
        .replace("{2}", currentArrayElement.cardTitle);
      currentBlock.appendChild(currentElement);
    }
  }
}
loadHandbookCards();

//---------------------HANDBOOK
function toggleVisibility(element) {
  if(element.hidden) {
    element.hidden = false;
  } else {
    element.hidden = true;
  }
}

function handbookTitleClick(event) {
  document.querySelector('.btn_close_all').hidden = false;
  const currentElement = event.currentTarget;
  toggleVisibility(currentElement.nextElementSibling);
}

document
  .querySelectorAll('.topic_title')
  .forEach(element => element.addEventListener('click', handbookTitleClick));



// ЗАПИСУЮ В СХОВИЩЕ СЕССІЙНЕ ЯКУ САМЕ ТЕМУ ОБРАНО
document.querySelectorAll('.content__menu-link').forEach(link =>
  link.addEventListener('click', linkPressed => {
    localStorage.removeItem('page');
    localStorage.setItem('page', linkPressed.currentTarget.dataset.url);
  }),
);

//* Closes all open tabs
(function(){
  document.querySelector('.btn_close_all').addEventListener('click', ()=> {
    document.querySelectorAll('.handbook__menu-content').forEach(element => {
      element.hidden = true;
    });
    const menuTop = document.querySelector('.handbook__menu').getBoundingClientRect().top + window.scrollY;
    window.scroll({top:menuTop, behavior: 'smooth'});
  });
})();




