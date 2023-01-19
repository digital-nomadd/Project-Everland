// блок Advantages (главное в работе)

const btnsAccordions = document.querySelectorAll('.advantages__button');

btnsAccordions.forEach(btnAccordion => {
  if (!btnAccordion.dataset.target) {
    console.error(`advantages__button: has not set target`, btnAccordion);
    return;
  }
  const accordion = document.getElementById(btnAccordion.dataset.target);
  if (!accordion) {
    console.error(`advantages__button: target not found`, btnAccordion);
    return;
  }
  
  btnAccordion.addEventListener('click', () => {
    accordion.classList.toggle('advantages__accordion_opened');   
    
  });

});

// Блок Спецпроекты

const cards = document.querySelectorAll('.specprojects__item');
const sliderLine = document.querySelector('.specprojects__track');

let count = 0;
let width;

function init() {
    console.log('resize');
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
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

const btnNext = document.querySelector('.specprojects__button-sld_next');
const btnPrev = document.querySelector('.specprojects__button-sld_prev');

btnNext.addEventListener('click', () => {
  count++;
  if (count >= cards.length) {
    count = 0;
}
  rollSlider();
})

btnPrev.addEventListener('click', () => {
  count--;
    if (count < 0) {
        count = cards.length - 1;
    }
    rollSlider();
})