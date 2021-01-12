import collapseMenu from './handbook/collapseMenu.js';

const cardsList = {//-------------------- LINKS
    "src/links/volonteers.html": {
        "parent": ".handbook__menu-container.links",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Волонтерські організації",
        'topicMenu': {
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/links/law_help.html": {
        "parent": ".handbook__menu-container.links",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Юридична допомога",
        'topicMenu': {
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/links/info_portals.html": {
        "parent": ".handbook__menu-container.links",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Інформаційні ресурси",
        'topicMenu': {
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
  // ------------------VOGNEVA
     "src/vogneva/books.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/books.jpg",
      "cardTitle": "Книги. Збірники.",
      'topicMenu': null
    },
    "src/vogneva/scouting_01.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/scouting.jpg",
      "cardTitle": "Розвідка цілей.",
      'topicMenu': {
        "#downloads": "&#128190;Матеріали для скачування",
        "#1": "Спостереження за полем бою",
        "#2": "Організація спостереження",
        "#3": "Визначення дальності до цілі",
        "#4": "Цілевказання",
        "#5": "Спостережний пост",
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
    },
    "src/vogneva/angles.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/angles.jpg",
      "cardTitle": "Кутові величини",
      'topicMenu': {
        "#1": "Поняття тисячної",
        "#2": "Градуси",
        "#3": "MOA (кутова хвилина)",
        "#4": "MIL(мілірадіан)",
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
    },
    "src/vogneva/how_to_shoot_gun.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/howtoshoot.jpg",
      "cardTitle": "Правила стрільби. Стрілецька зброя",
      'topicMenu': {
        "#1": "ТАБЛИЧНІ умови для стрільби",
	    "#2": "Вибір цілі. Вихідні установки для стрільби",
	    "#3": "Стрільба по цілях на дальності прямого пострілу",
        "#4": "Внесення поправок до стрільби",
        "#5": "Джерела",
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
      },
    "src/vogneva/ak47.html":  {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/ak47.jpg",
      "cardTitle": "АК-47М",
      'topicMenu': {
        "#downloads": "&#128190;Матеріали для скачування",
        "#1": "ТТХ. Призначення і загальні відомості.",
	    "#2": "Загальна будова. Неповне розбирання",
	    "#3": "Приведення до нормального бою.",
	    "#4": "Експлуатація та обслуговування",
	    "#5": "Правила стрільби",
	    "#6": "Призначення основних частин і механізмів",
	    "#7": "Балістична таблиця",
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
    },
    "src/vogneva/ak74.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/ak74.jpg",
      "cardTitle": "АК-74",
      'topicMenu': {
        "#downloads": "&#128190;Матеріали для скачування",
        "#1": "Загальна інформаця, ТТХ, боєприпаси",
        "#2": "Загальна будова автомата",
        "#3": "Порядок неповного розбирання",
        "#4": "Приведення до нормального бою",
	    "#5": "Експлуатація, обслуговування.",
	    "#6": "Призначення частин і механізмів",
	    "#7": "Робота частин і механізмів",
	    "#8": "Балістича таблиця",
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
    },
    "src/vogneva/rpk74.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/rpk74.jpg",
      "cardTitle": "РПК-74",
      'topicMenu': {
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
      },
    "src/vogneva/pk.html": {
      "parent": ".handbook__menu-container.vogneva",
      "imgSrc": "img/handbook/pk.jpg",
      "cardTitle": "ПК",
      'topicMenu': {
        "#downloads": "&#128190;Матеріали для скачування",
        "#1": "Загальна інформація, ТТХ, боєприпаси",
	    "#D": "Джерела",
        "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
      }
      },
      "src/vogneva/rpg.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/rpg.jpg",
        "cardTitle": "РПГ-7В",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#1": "Загальна інформація, ТТХ, боєприпаси",
            "#D": "Джерела",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/grenades.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/grenades.jpg",
        "cardTitle": "Ручні уламкові гранати",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#1": "Загальна інформація",
	        "#2": "Джерела",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/gp25.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/gp25.jpg",
        "cardTitle": "ГП-25",
        'topicMenu': {
            "#1": "Загальна інформація, ТТХ, боєприпаси",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/pm.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "ПМ",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/dashka.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/dashka.jpg",
        "cardTitle": "ДШКМ",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#4": "ПОСИЛАННЯ",
            "#1": "Загальна інформація, ТТХ, боєприпаси",
	        "#5": "Джерела",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/utes.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/utes.jpg",
        "cardTitle": "НСВ 'Утес'",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#1": "Загальна інформація, ТТХ, боєприпаси",
            "#D": "Використані джерела",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/ags17.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/ags17.jpg",
        "cardTitle": "АГС-17 'Пламя'",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#1": "Загальна інформація, ТТХ, боєприпаси",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/spg9.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/spg9.jpg",
        "cardTitle": "СПГ-9 'Копье'",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#1": "Загальна інформація, ТТХ, боєприпаси",
	        "#D": "Використані джерела",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/svd.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "СВД",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },
      "src/vogneva/nightSight.html": {
        "parent": ".handbook__menu-container.vogneva",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Нічні приціли",
        'topicMenu': {
            "#downloads": "&#128190;Матеріали для скачування",
            "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
          }
      },

        // ---------------------- INDIVIDUAL
      "src/individual/basic.html":  {
        "parent": ".handbook__menu-container.individual",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "БАЗА",
        'topicMenu': {
          "#1": "Досвід АТО",
	        "#2": "Базова екіпіровка",
	        "#3": "Поведінка зі зброєю",
          "#4": "Способи утримання автомата",
	        "#5": "Способи перезарядки",
	        "#D": "Використані джерела",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/individual/berkut.html": {
        "parent": ".handbook__menu-container.individual",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Ігор Беркут. Посібник з індивідуальної підготовки.",
        'topicMenu': null
      },
      // ---------- TOPOGRAPHY
      "src/topography/books.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Книги. Посібники.",
        'topicMenu': {
          "#downloads": "&#128190;Матеріали для скачування",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/01orientation.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Орієнтування на місцевості. Цілевказання.",
        'topicMenu': {
          "#1": "Орієнтування на місцевості",
          "#2": "Цілевказання",
          "#D": "Використані джерела",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/02vectors.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Визначення напряму на сторони горизонту",
        'topicMenu': {
          "#1": "За компасом",
          "#2": "За годинником та Сонцем",
          "#3": "За полярною зіркою",
          "#4": "За годинником та Сонцем",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/03azimut.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Магнітний азимут",
        'topicMenu': {
          "#1": "Азимути",
	        "#2": "Напрямок за азимутом",
	        "#3": "Таблиця азимутів",
	        "#4": "Переведення азимуту в дирекційний кут - ВІДЕО",
	        "#5": "ЗАДАЧІ - Азимути",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/problems.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Вирішення задач",
        'topicMenu': {
          "#mini": "Звичайні задачі",
          "#complex": "Комплексні задачі",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/04angles_distances.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Визначення кутів та відстаней на місцевості ",
        'topicMenu': {
          "#1": "Способи визначення кутів",
	        "#2": "Переведення кутів",
	        "#3": "Способи визначення відстаней",
	        "#4": "По кутовим розмірам",
	        "#5": "За покривною величиною",
	        "#6": "ПГО-7",
	        "#7": "На слух",
	        "#8": "Паракроки",
	        "#9": "Лінійні розміри",
	        "#D": "Використані джерела",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/coordinates.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Координати цілі за даними з СП",
        'topicMenu': {
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      },
      "src/topography/maps.html": {
        "parent": ".handbook__menu-container.topography",
        "imgSrc": "img/handbook/books.jpg",
        "cardTitle": "Топографічні карти ",
        'topicMenu': {
          "#1": "Визначення і призначення",
	        "#2": "Класифікація карт",
	        "#3": "Що є на карті?",
	        "#D": "Використані джерела",
          "#mail": "ВЕТЕРАНИ ГОВОРЯТЬ"
        }
      }
}

// ------------------------------------ DYNAMIC INPUT of SUBJECT CARDS - START
function loadHandbookCards(){
  const cardTemplate = `<div class="handbook_card">
  <div class="content__menu-link"
  data-url='{0}'
  >
    <img src="{1}" class="handbook_card-image">
    <p class="handbook_card-title">{2}</p>
  </div>
  </div>
  `;
    for (let key in cardsList){
        const currentBlock = document.querySelector(cardsList[key]['parent']);
        currentBlock.innerHTML += cardTemplate
            .replace("{0}", key)
            .replace('{1}', cardsList[key].imgSrc)
            .replace("{2}", cardsList[key].cardTitle);
    }
}
loadHandbookCards();
// ------------------------------------ DYNAMIC INPUT of SUBJECT CARDS - END

//---------------------HANDBOOK MENU NAVIGATION - START
function toggleVisibility(element) {
  if(element.hidden) {
    element.hidden = false;
  } else {
    element.hidden = true;
  }
}

function handbookTitleClick(event) {
  document.querySelector('.btn_close_all').style.display = 'block';
  const currentElement = event.currentTarget;
  toggleVisibility(currentElement.nextElementSibling);
}


function loadTopicMenu(chosenLink) {
  const topicMenuTemplate = ` <nav class="page_content_menu">
    <h3 class="nav_title">&#9776;  МЕНЮ</h3>
      <ul class="page_content_menu-list">
      </ul>
    </nav>`;
  const liTemplate = `<li><a class="page_content_menu-link" href="{0}">{1}</a></li>`;
  const menu = document.querySelector('.main-sidebar_right');
  menu.innerHTML = topicMenuTemplate;
  const listElement = menu.querySelector('.page_content_menu-list');
  const menuList = cardsList[chosenLink]['topicMenu'];
    console.log(menuList);
    if(menuList) {
        for( let key in menuList) {
            listElement.innerHTML += liTemplate
              .replace('{0}', key)
              .replace('{1}', menuList[key]);
          }
    }
}

async function fetchHtml(link) {
  const response = await fetch(link);
  const html = await response.text();
  document.querySelector('.content_container').innerHTML = html;
}

document
  .querySelectorAll('.topic_title')
  .forEach(element => element.addEventListener('click', handbookTitleClick));

document.querySelectorAll('.content__menu-link').forEach(link =>
  link.addEventListener('click', linkPressed => {
    linkPressed.preventDefault();
    const chosenLink = linkPressed.currentTarget.dataset.url
    fetchHtml(chosenLink);
    loadTopicMenu (chosenLink);
    window.scrollTo(0, 0);

    if(window.innerWidth < 768) {
        collapseMenu.collapseHandbookMenu();
        const subjectTop = document.querySelector('.main-content').getBoundingClientRect().top + window.scrollY - 40;
        window.scroll({top: subjectTop, behavior: 'smooth'});
    }

  }),
);

//---------------------HANDBOOK MENU NAVIGATION - END

// // ---------------------- SCROLLING - START
// const headerMenu = document.querySelector('.header_menu-main');
// const headerCoord = headerMenu.getBoundingClientRect().top + scrollY;
// const handbookMenuLeft = document.querySelector('.main-sidebar_left');
// const handbookMenuRight = document.querySelector('.main-sidebar_right');

// window.addEventListener('scroll', () => {
//   const windowWidth = window.innerWidth;
//   const scrollY = window.scrollY;

//   if (windowWidth > 768) {
//     if(scrollY > 500) {
//       headerMenu.classList.add('header_menu-main--fixed');
//       handbookMenuLeft.classList.add('main-sidebar_left--fixed');
//       handbookMenuRight.classList.add('main-sidebar_right--fixed');

//     } else {
//       headerMenu.classList.remove('header_menu-main--fixed');
//       handbookMenuLeft.classList.remove('main-sidebar_left--fixed');
//       handbookMenuRight.classList.remove('main-sidebar_right--fixed');
//     }

//   }
// });
// // ---------------------- SCROLLING - END

collapseMenu.initHandbookMenuCollapsing();





