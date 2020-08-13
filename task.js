const product = document.getElementsByClassName("product");
const cartProducts = document.getElementsByClassName("cart__products");
const cartProduct = document.getElementsByClassName("cart__product");


for (let i = 0; i < product.length; i++) {
    product[i].addEventListener("click", (event) =>{
        if (event.target.classList.contains("product__quantity-control_inc")){
            event.target.previousElementSibling.textContent = +event.target.previousElementSibling.textContent + 1;
        } else if (event.target.classList.contains("product__quantity-control_dec")){
            event.target.nextElementSibling.textContent = +event.target.nextElementSibling.textContent - 1;
            if (event.target.nextElementSibling.textContent < 0) {
                event.target.nextElementSibling.textContent = 0;
            }
        } else if (event.target.classList.contains("product__add")){
            let productInCart = document.querySelector(`.cart__product[data-id='${product[i].getAttribute("data-id")}']`);
    
            if (productInCart) {
                productInCart.querySelector('.cart__product-count').textContent = +productInCart.querySelector('.cart__product-count').textContent + parseInt(event.target.previousElementSibling.children[1].textContent);
            } else {
                cartProducts[0].innerHTML += `<div class="cart__product" data-id="${product[i].getAttribute("data-id")}">
                                                <img class="cart__product-image" src="${product[i].children[1].getAttribute("src")}">
                                                <div class="cart__product-count">${event.target.previousElementSibling.children[1].textContent}</div>
                                            </div>`;
            }
        }
    });
};

