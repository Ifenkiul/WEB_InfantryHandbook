//* ------------------------------------------------Closes all open tabs
function collapseHandbookMenu() {
    document.querySelectorAll('.handbook__menu-content').forEach(element => {
        element.hidden = true;
      });
      const menuTop = document.querySelector('.main-container').getBoundingClientRect().top + window.scrollY;
      window.scroll({top: 0, behavior: 'smooth'});
}

const initHandbookMenuCollapsing = function (){
    document.querySelector('.btn_close_all').addEventListener('click', (event)=> {
    collapseHandbookMenu()
    event.currentTarget.style.display = 'none';
    });
  };

  const collapseMenu = {
    initHandbookMenuCollapsing,
    collapseHandbookMenu
  }
 export default collapseMenu;