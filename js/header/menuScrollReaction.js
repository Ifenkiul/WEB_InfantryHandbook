  //HEADER CHANGE BG COLOR ON SCROLL and fixing HEADER on scroll


function changeToolbarColor(){
    const toolbar = document.querySelector('.header_menu-main');
    window.addEventListener('scroll', function () {
      const windowScroll = window.scrollY;
  
      if (windowScroll < 2000) {
        toolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)'
      } else if (windowScroll > 2000 && windowScroll < 4000) { 
        toolbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; //OLIVE
      } else if (windowScroll >= 4000 && windowScroll < 6000) {
        toolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)'; //DARK OLIVE
      } else if (windowScroll >= 6000 && windowScroll < 8000) {
        toolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)'; //LIGHT GREEN
      } else if (windowScroll >= 8000 && windowScroll < 10000) {
        toolbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; //SAND
      } else if (windowScroll >= 10000) {
        toolbar.style.backgroundColor = 'rgba(163, 163, 128, 0.8)';
      } else {
        toolbar.style.backgroundColor = 'unset';
      }
    });
}

export default changeToolbarColor;