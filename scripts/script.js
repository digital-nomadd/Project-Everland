// выпадающее меню
const menuIcon = document.querySelector('.header__menu-icon');
const headerSpan = document.querySelectorAll('.header__span')

menuIcon.addEventListener("click", function(e) {
  headerSpan.classList.toggle('_activ');
})