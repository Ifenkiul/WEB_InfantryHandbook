const miniNavigatorTemplate = `<div class="mini_navigator-container mini_navigator-container--collapsed">
    <div class="mini_navigator-btn menu"><p class="mini_navigator-arrow">&#9776;</p></div>
    <div class="mini_navigator-btn scroll_top"><p class="mini_navigator-arrow">&#8648;</p></div>
    <div class="mini_navigator-btn scroll_bottom"><p class="mini_navigator-arrow">&#8650;</p></div>
</div>
<img class="mini_navigator-btn menu_toggle" src="img/compass.png" alt="mini button image" width="100%" >`;

const navigatePage = function(){
    const miniNavigatorElement = document.createElement('nav');
    miniNavigatorElement.classList.add('mini_navigator');
    miniNavigatorElement.innerHTML = miniNavigatorTemplate;

    document.querySelector('body').appendChild(miniNavigatorElement);
    const btnToggleMenu = document.querySelector('.mini_navigator-btn.menu_toggle');
    const miniNavigatorContainer = document.querySelector('.mini_navigator-container');
    const btnScrollTop = document.querySelector('.mini_navigator-btn.scroll_top');
    const btnMenu = document.querySelector('.mini_navigator-btn.menu');
    const btnScrollBottom = document.querySelector('.mini_navigator-btn.scroll_bottom');

    btnToggleMenu.addEventListener('click', (event) => {
        miniNavigatorContainer.classList.toggle('mini_navigator-container--collapsed');
        if (miniNavigatorContainer.classList.contains('mini_navigator-container--collapsed')) {
            btnToggleMenu.src = 'img/compass.png';
        } else {
            btnToggleMenu.src = 'img/compass_closed.png';
        }
    });

    btnMenu.addEventListener('click', () => {
        const menuBlock = document.querySelector('.main-sidebar_right');
        if(menuBlock) {
            menuBlock.classList.toggle('main-sidebar_right--visible');
        }
    });

    btnScrollTop.addEventListener('click', () => {
        window.scroll({top:0, behavior: 'smooth'});
    });

    btnScrollBottom.addEventListener('click', () => {
        window.scroll({top: document.body.scrollHeight, behavior: 'smooth' });
    });
    
}

export default  navigatePage;