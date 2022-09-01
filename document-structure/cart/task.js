let products = Array.from(document.querySelectorAll('.product'));

products.forEach(function(product) {
  let quantityDiv = product.querySelector('.product__quantity-value');
  let minusDiv = product.querySelector('.product__quantity-control_dec');
  let plusDiv = product.querySelector('.product__quantity-control_inc');
  let addButton = product.querySelector('.product__add');
  let quantity = Number(quantityDiv.innerText);

  minusDiv.addEventListener('click', () => {
    if (quantity > 1) {
    quantity -= 1;
    }
    quantityDiv.innerText = quantity;
  });

  plusDiv.addEventListener('click', () => {
    quantity += 1;
    quantityDiv.innerText = quantity;
  });

  addButton.addEventListener('click', () => {
    let cartProducts = document.querySelector('.cart__products');
    let img = product.querySelector('img');

    if (!cartProducts.querySelector(`[data-id='${product.dataset.id}']`)) {
      cartProducts.insertAdjacentHTML('BeforeEnd', `     
        <div class="cart__product" data-id="${product.dataset.id}">
          <img class="cart__product-image" src="${img.src}">
          <div class="cart__product-count">${quantity}</div>
        </div>
      `);
    } else {
      let cartQuantity = Number(cartProducts.querySelector(`[data-id='${product.dataset.id}']`).querySelector('.cart__product-count').innerText);    
      cartQuantity = cartQuantity + quantity;
      cartProducts.querySelector(`[data-id='${product.dataset.id}']`).querySelector('.cart__product-count').innerText = cartQuantity;
    }
  });

});