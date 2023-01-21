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
  
  rollSlider()
})

prev.addEventListener('click', function() {
  count --;
  if (count < 1) {
    count = 1 
  }
rollSlider()
})

function rollSlider() {
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

  console.log('menuArrow', menuArrow)
  console.log('menuList', menuList)
  menuArrow.addEventListener('click', function() {
  menuList.classList.toggle('popup-menu__list_activ');
  menuArrow.classList.toggle('popup-menu__arrow_rotate');
  })
}


console.log(menuArrows)