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
const textList = document.querySelector('.project__text-list');
const projectTitle = document.querySelector('.project__title');

const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const current = document.querySelector('.current')
const widthOfFirst = imageFirstContainer.offsetWidth;
const widthOfSecond = imageSecondContainer.offsetWidth;
const widthOfTextList = textList.offsetWidth;
const widthOfTitle = projectTitle.offsetWidth;

let count = 1;
const maxCount = 6;

next.addEventListener('click', function() {
  count++;
  if (count >= maxCount) {
    count = maxCount
  }
  prev.disabled = count === 1
  next.disabled = count === maxCount
  headerRollSlider()
})

prev.addEventListener('click', function() {
  count --;
  if (count < 1) {
    count = 1
  }
   prev.disabled = count === 1
   next.disabled = count === maxCount
  headerRollSlider()
})

function headerRollSlider() {
  imageFirstContainer.style.transform = 'translate(-' + (count * widthOfFirst - widthOfFirst) + 'px)';
  imageSecondContainer.style.transform = 'translate(-' + (count * widthOfSecond - widthOfSecond) + 'px)';
  textList.style.transform = 'translate(-' + (count * widthOfTextList - widthOfTextList) + 'px)';
  projectTitle.style.transform = 'translate(-' + (count * widthOfTitle - widthOfTitle) + 'px)';
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

const headerAccordions = document.querySelectorAll('.advantages__header');

headerAccordions.forEach((el) => {
  el.addEventListener('click', () => {
    let accordion = el.nextElementSibling;

    if (accordion.style.maxHeight) {
      document.querySelectorAll('.advantages__accordion').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.advantages__accordion').forEach((el) => el.style.maxHeight = null)
      accordion.style.maxHeight = accordion.scrollHeight + 'px';
    }
  })
})

const btnsAccordions = document.querySelectorAll('.button_type_accordeon');

btnsAccordions.forEach(btnAccordion => {

  const colorButton = document.getElementById(btnAccordion.dataset.toggle);

  btnAccordion.addEventListener('click', () => {
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

// Блок "donation"

const donationInputConatainer = document.querySelector('.donation__values');
const supportInputConatainer = document.querySelector('.support__amount-container');
const donationRadioButtons = donationInputConatainer.querySelectorAll('.button');
let buttonToBeChanged = new Object();

donationRadioButtons.forEach(button => button.addEventListener('change', () => updateRadioButton(button)));

function updateRadioButton(button) {
  const buttonId = button.id;
  switch (buttonId) {
    case 'sum_250':
      buttonToBeChanged = supportInputConatainer.querySelector('#amount-250');
      buttonToBeChanged.checked = true;
      break;
    case 'sum_500':
      buttonToBeChanged = supportInputConatainer.querySelector('#amount-500');
      buttonToBeChanged.checked = true;
      break;
    case 'sum_750':
      buttonToBeChanged = supportInputConatainer.querySelector('#amount-750');
      buttonToBeChanged.checked = true;
      break;
    case 'sum_1000':
      buttonToBeChanged = supportInputConatainer.querySelector('#amount-1000');
      buttonToBeChanged.checked = true;
      break;
    case 'sum_dif':
      buttonToBeChanged = supportInputConatainer.querySelector('#another-amount');
      buttonToBeChanged.checked = true;
      break;
    default:
      break;
  }
}
