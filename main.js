// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = function() {
  cart.classList.add('active')
}
