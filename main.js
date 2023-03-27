// STOPPED AT 50:26

// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
  cart.classList.add('active')
}

closeCart.onclick = () => {
  cart.classList.remove('active');
}

// Cart

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

// Making function
function ready() {
  // Remove items from cart
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  // Quantity Changes
  let quantityInputs = document.getElementsByClassName('cart-quantity');
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  // Add to cart 
  let addCart = document.getElementsByClassName('add-cart');
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
}

// Remove items from cart 
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}
// Quantity Changes
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// Add to cart
function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  let price = shopProducts.getElementsByClassName('price')[0].innerText;
  let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}
function addProductToCart(title, price, productImg) {
  let cartShopBox = document.createElement('div');
  // cartShopBox.classList.add('cart-box');
  let cartItems = document.getElementsByClassName('cart-content')[0];
  let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for (let i = 0; i < cartItemsNames.length; i++) {
    alert('You have already added this item to the cart');
  }
}

// Update total
function updateTotal() {
  let cartContent = document.getElementsByClassName('cart-content')[0];
  let cartBoxes = cartContent.getElementsByClassName('cart-box');
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName('cart-price')[0];
    let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    let price = parseFloat(priceElement.innerText.replace('₽', ''));
    // The parseFloat() function parses a string argument and returns a floating point number.
    let quantity = quantityElement.value;
    total = total + price * quantity;
    // If price contains cents (kopeks in my case)
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = '₽' + total;
    
  }

}