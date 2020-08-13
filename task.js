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
            if (cartProduct.length == 0){
                cartProducts[0].innerHTML += `<div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
                                        <img class="cart__product-image" src="${product[i].children[1].src}">
                                        <div class="cart__product-count">${event.target.previousElementSibling.children[1].textContent}</div>
                                        </div>`;
            } else if (cartProduct.length > 0) {
                for (let j = 0; j < cartProduct.length; j++){
                    if (product[i].getAttribute('data-id') == cartProduct[j].getAttribute('data-id')){
                        cartProduct[j].children[1].textContent = +event.target.previousElementSibling.children[1].textContent + parseInt(cartProduct[j].children[1].textContent);
                    } else if (product[i].getAttribute('data-id') != cartProduct[j].getAttribute('data-id')){
                        cartProducts[0].innerHTML += `<div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
                            <img class="cart__product-image" src="${product[i].children[1].src}">
                            <div class="cart__product-count">${event.target.previousElementSibling.children[1].textContent}</div>
                            </div>`;
                    }
                }
                
            }   
            
        } 
    });
};

