const size = document.querySelector('.size');
let select = size.querySelector('.select');
let option = size.querySelectorAll('.option');
let selectTxt = size.querySelector('.select-txt');

// For displaying the list

select.addEventListener('click', () => size.classList.toggle('click'));

// For selecting the option

option.forEach(option => {
  option.addEventListener('click', () => {
    let optionTxt = option.querySelector('.option-txt').innerHTML;
    selectTxt.innerHTML = optionTxt;

    // For closing list after selecting
    size.classList.remove('click');
  })
})

// Add to favorite
const cart = document.querySelector('.product-cart');
let favorite = cart.querySelector('.like');

favorite.addEventListener('click', () => cart.classList.toggle('liked'));