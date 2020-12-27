const burgerClick = function (){
    const burgerElement =  document.querySelector('.header_menu-burger');
    burgerElement.addEventListener('click', function () {
        document.querySelector('.header_menu-list').classList.toggle('header_menu-list--shown');
        burgerElement.classList.toggle('header_menu-burger--rotated');
    });
}
export default burgerClick;