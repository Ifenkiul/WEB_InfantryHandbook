const miniNavigatorTemplate = `<div class="mini_navigator-container mini_navigator-container--collapsed">
    <div class="mini_navigator-btn scroll_top"><p class="mini_navigator-arrow">&#8648;</p></div>
    <div class="mini_navigator-btn prev_nav_point"><p class="mini_navigator-arrow">&#8613;</p></div>
    <div class="mini_navigator-btn next_nav_point"><p class="mini_navigator-arrow">&#8615;</p></div>
    <div class="mini_navigator-btn scroll_bottom"><p class="mini_navigator-arrow">&#8650;</p></div>
</div>
<img class="mini_navigator-btn menu_toggle" src="img/compass.png" alt="mini button image" width="100%" >`;
function getCurrentNavPoint (navPointsArray) {
    const windowScrollY = window.scrollY;
    for (let i = navPointsArray.length-1; i >=0; i--){
        if( windowScrollY > navPointsArray[i].getBoundingClientRect().top + windowScrollY){
            return i;
        }
    }
}

const navigatePage = function(){
    const miniNavigatorElement = document.createElement('nav');
    miniNavigatorElement.classList.add('mini_navigator');
    miniNavigatorElement.innerHTML = miniNavigatorTemplate;

    document.querySelector('body').appendChild(miniNavigatorElement);
    const navigationPoints = document.querySelectorAll('.content_navigation_point');
    const navPointsMaxIndex = navigationPoints.length - 1;
    const btnToggleMenu = document.querySelector('.mini_navigator-btn.menu_toggle');
    const miniNavigatorContainer = document.querySelector('.mini_navigator-container');
    const btnScrollTop = document.querySelector('.mini_navigator-btn.scroll_top');
    const btnPrevNavPoint = document.querySelector('.prev_nav_point');
    const btnNextNavPoint = document.querySelector('.next_nav_point');
    const btnScrollBottom = document.querySelector('.mini_navigator-btn.scroll_bottom');

    btnToggleMenu.addEventListener('click', (event) => {
        miniNavigatorContainer.classList.toggle('mini_navigator-container--collapsed');
        if (miniNavigatorContainer.classList.contains('mini_navigator-container--collapsed')) {
            btnToggleMenu.src = 'img/compass.png';
        } else {
            btnToggleMenu.src = 'img/compass_closed.png';
        }
    });

    btnScrollTop.addEventListener('click', () => {
        window.scroll({top:0, behavior: 'smooth'});
    })

    btnPrevNavPoint.addEventListener('click', () => {
        const currentNavPoint = getCurrentNavPoint(navigationPoints);
        console.log('current point: ' + currentNavPoint);
        const goToPoint = (!currentNavPoint || currentNavPoint - 1 < 0) ? 0 : currentNavPoint -1;
        console.log('gotopoint : ' + goToPoint);
        const pointToScroll = navigationPoints[goToPoint].getBoundingClientRect().top + window.scrollY - 70;
        window.scroll({top: pointToScroll, behavior: 'smooth' });
    });

    btnNextNavPoint.addEventListener('click', () => {
        let currentNavPoint = getCurrentNavPoint(navigationPoints);
        console.log('current point: ' + currentNavPoint);
        const goToPoint = (currentNavPoint === undefined) ?  1 :
            currentNavPoint === navPointsMaxIndex ?  navPointsMaxIndex :
            currentNavPoint + 1;
        console.log('gotopoint : ' + goToPoint);
        const pointToScroll = navigationPoints[goToPoint].getBoundingClientRect().top + window.scrollY + 1;
        window.scroll({top: pointToScroll, behavior: 'smooth' });
    });

    btnScrollBottom.addEventListener('click', () => {
        window.scroll({top: document.body.scrollHeight, behavior: 'smooth' });
    });
    
}

export default  navigatePage;