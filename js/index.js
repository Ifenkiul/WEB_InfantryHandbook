/** +++++++++++++++++++++++++++MENU HORIZONTAl HIGHLITING++++++++++++++++++*/
$(window).scroll(function () {
  let handbookTop = $('.main__menu').offset().top;
  let scrTop = $(this).scrollTop();
  if (scrTop < handbookTop) {
    $('.menu__hor__list-link.index').addClass('active');
  } else {
    $('.menu__hor__list-link.index').removeClass('active');
  }
  if (scrTop > handbookTop) {
    $('.menu__hor__list-link.handbook').addClass('active');
  } else {
    $('.menu__hor__list-link.handbook').removeClass('active');
  }
});
/** +++++++++++++++++++++++++++MENU HORIZONTA:L FIXING  and HIGHLITING++++++++++++++++++*/
