let menuLink = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(e) {
    if ((menuLink[i].closest('.menu_main').querySelector('.menu_active')) 
    && ((menuLink[i].closest('.menu_main').querySelector('.menu_active')) 
    !== menuLink[i].closest('li').querySelector('.menu'))) {
      menuLink[i].closest('.menu_main').querySelector('.menu_active').classList.remove('menu_active');
    }
    if (menuLink[i].closest('li').querySelector('.menu')) {
      menuLink[i].closest('li').querySelector('.menu').classList.toggle('menu_active');
      e.preventDefault();
    }
  });
};
