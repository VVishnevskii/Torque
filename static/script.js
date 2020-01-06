let buttonPageHeader_1 = document.querySelector('.main-nav__button');
let menuBar = document.querySelector('.main-nav__inner');
let menuCloseBtn = document.querySelector('.main-nav__close-btn');

buttonPageHeader_1.addEventListener('click', function() {
  let buttonStatus_1 = document.querySelector('.main-nav__button--active');
  buttonPageHeader_1.classList.toggle('main-nav__button--active');
  menuBar.classList.remove('main-nav__inner--hidden');
})

menuCloseBtn.addEventListener('click', function() {
  menuBar.classList.add('main-nav__inner--hidden');
  buttonPageHeader_1.classList.toggle('main-nav__button--active');
})