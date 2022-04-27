const DOMContent = document.querySelector(".cart-body");
// const DOMButtonClearCart = document.querySelector(".clear-cart");
const DOMCartItem = document.querySelector(".cart-items");
const cartNoItemCont = document.querySelector(".cart-noItems-container");
const cartProductCont = document.querySelector(".cart-mid-product-container");
const cartStartShoppingBtn = document.querySelector(".cart-startShopping-wp");
const cartCheckoutBtn = document.querySelector(".checkout-btn-wp");

let APIdataArray = JSON.parse(localStorage.getItem("APIDATA"));
let cartItemsData = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items to the DOM
const addCartItem = (content) => {
  console.log(content);

  //Add Quantity to the item
  let tempItem = APIdataArray.find((item) => item.id == content.id);
  tempItem.amount = 1;
  tempItem.totalPrice = content.price;

  let DOMCartItem = document.createElement("div");
  DOMCartItem.innerHTML = `
    <div class="cart-info">
                    <img
                      src=${content.imageURL}
                      alt="product image"
                    />
                    
                      <div class="product-middle-wp">
                        <p class="product-name"><strong>${content.name}</strong></p>
                        <div class="product-price-wp">
                          <p class="prodcut-price" >
                            <i class="fas fa-minus-circle" onClick="changeQuantity(this)" data-id="${content.id}"></i><span class="product-quantity">1</span><i class="fas fa-plus-circle" onClick="changeQuantity(this)" data-id="${content.id}"></i>
                          x Rs.${content.price}
                          </p>
                            <p class="product-total-price">RS.${content.totalPrice}</p>
                        </div>
                      </div>
                    
                   
                  </div>
  `;
  DOMContent.appendChild(DOMCartItem);

  cartNoItemCont.style.display = "none";
  cartProductCont.style.display = "block";

  //change display settings of cart buttons
  cartStartShoppingBtn.style.display = "none";
  cartCheckoutBtn.style.display = "block";
};

for (item in cartItemsData) {
  // iterating over the cart
  APIdataArray.filter((data) => {
    if (data.id === cartItemsData[item]) {
      addCartItem(data);
    }
  });
}

// Cart items in the nav bar
DOMCartItem.textContent = `${cartItemsData.length} items`;

// Removing cart specific things if the cart is empty
const checkCart = () => {
  if (cartItemsData.length === 0) {
    DOMCartItem.textContent = "0 items";
    cartNoItemCont.style.display = "flex";
    cartProductCont.style.display = "none";

    //change display settings of cart buttons
    cartStartShoppingBtn.style.display = "block";
    cartCheckoutBtn.style.display = "none";
  } else {
    DOMCartItem.textContent = `${cartItemsData.length} items`;
    cartNoItemCont.style.display = "none";
    cartProductCont.style.display = "block";

    //change display settings of cart buttons
    cartStartShoppingBtn.style.display = "none";
    cartCheckoutBtn.style.display = "block";
  }
};

document.querySelector(".cart-close-btn").addEventListener("click", () => {
  document.querySelector(".cart-container").style.display = "none";
});

document.querySelector(".cart-button").addEventListener("click", () => {
  document.querySelector(".cart-container").style.display = "flex";
});

function changeQuantity(element) {
  console.log(element.classList[1]);

  if (element.classList[1] === "fa-minus-circle") {
    const id = element.dataset.id;
    let tempItem = APIdataArray.find((item) => item.id == id);
    tempItem.amount = tempItem.amount - 1;
    tempItem.totalPrice = tempItem.totalPrice - tempItem.price;

    console.log(APIdataArray);

    localStorage.setItem("APIDATA", JSON.stringify(APIdataArray));
    element.parentNode.nextElementSibling.innerText = `Rs.${tempItem.totalPrice}`;
  } else if (element.classList[1] === "fa-plus-circle") {
    const id = element.dataset.id;
    let tempItem = APIdataArray.find((item) => item.id == id);
    tempItem.amount = tempItem.amount + 1;
    tempItem.totalPrice = tempItem.totalPrice + tempItem.price;

    console.log(APIdataArray);
    localStorage.setItem("APIDATA", JSON.stringify(APIdataArray));
    element.parentNode.nextElementSibling.innerText = `Rs.${tempItem.totalPrice}`;
  }
}
// Adding clear cart functionality to the button
// DOMButtonClearCart.addEventListener("click", clearCart);

// Adding check and clear cart functionality on winow onload
window.onload = checkCart;
