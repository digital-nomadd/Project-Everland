// header выпадающее меню
const menuIcon = document.querySelector('.header__menu-icon');
const popupMenu = document.querySelector('.popup-menu');
const closeMenu = document.querySelector('.popup-menu__close');


menuIcon.addEventListener("click", () => {
  openPopup(popupMenu)
})

closeMenu.addEventListener("click", () => {
  closePopup(popupMenu)
})

closeByOverlay(popupMenu)


function openPopup(popup) {
  popup.classList.add('popup-menu_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup-menu_opened')
}

function closeByOverlay(popup) {
  if (popup.className.includes('overlay')) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup(popup)
      }
    })
  }
}

// слайдер "социальный предпринимательский проект"
const imageFirstContainer = document.querySelector('.project__image_first');
const imageSecondContainer = document.querySelector('.project__image_second');

const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const current = document.querySelector('.current')
const widthOfFirst = imageFirstContainer.offsetWidth;
const widthOfSecond = imageSecondContainer.offsetWidth;

let count = 1;

next.addEventListener('click', function() {
  count++;
  if (count >= 6) {
    count = 6
  }
  headerRollSlider()
})

prev.addEventListener('click', function() {
  count --;
  if (count < 1) {
    count = 1
  }
  headerRollSlider()
})

function headerRollSlider() {
  imageFirstContainer.style.transform = 'translate(-' + (count * widthOfFirst - widthOfFirst) + 'px)';
  imageSecondContainer.style.transform = 'translate(-' + (count * widthOfSecond - widthOfSecond) + 'px)';
  current.textContent = count
}

// раскрывающееся подменю

const menuArrows = document.querySelectorAll('.popup-menu__arrow');
const menuLists = document.querySelectorAll('.popup-menu__list')

for (let i = 0; i < menuArrows.length; i ++) {
  const menuArrow = menuArrows[i];
  const menuList = menuLists[i]
  menuArrow.addEventListener('click', function() {
  menuList.classList.toggle('popup-menu__list_activ');
  menuArrow.classList.toggle('popup-menu__arrow_rotate');
  })
}


// блок Advantages (главное в работе)

const btnsAccordions = document.querySelectorAll('.button_type_accordeon');

btnsAccordions.forEach(btnAccordion => {
  if (!btnAccordion.dataset.target) {
    console.error(`button_type_accordeon: has not set target`, btnAccordion);
    return;
  }
  const accordion = document.getElementById(btnAccordion.dataset.target);
  if (!accordion) {
    console.error(`button_type_accordeon: target not found`, btnAccordion);
    return;
  }

  const colorButton = document.getElementById(btnAccordion.dataset.toggle);

  btnAccordion.addEventListener('click', () => {
    accordion.classList.toggle('advantages__accordion_opened');
    colorButton.classList.toggle('button_pressed');
  });

});

// Блок Спецпроекты

const cards = document.querySelectorAll('.specprojects__item');
const sliderLine = document.querySelector('.specprojects__track');

let counter = 0;
let width;

function init() {
    width = document.querySelector('.specprojects__box').offsetWidth;
    sliderLine.style.width = width * cards.length + 'px';
    cards.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });
    rollSlider();

}

init();
window.addEventListener('resize', init);

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + counter * width + 'px)';

}

const btnNext = document.querySelector('#sp-next');
const btnPrev = document.querySelector('#sp-prev');

btnNext.addEventListener('click', () => {
  counter++;
  if (counter >= cards.length) {
    counter = 0;
  }
  rollSlider();
})

btnPrev.addEventListener('click', () => {
  counter--;
    if (counter < 0) {
        counter = cards.length - 1;
    }
    rollSlider();
})
