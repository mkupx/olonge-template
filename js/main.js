const burgerButton = document.querySelector('.burger__button');

const burgerMenu = document.querySelector('.burger__menu'); 

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  burgerMenu.classList.toggle('active')
})
