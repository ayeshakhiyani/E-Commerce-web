let cart = 0;

function addToCart() {

cart++;

document.getElementById("cartCount").innerText = cart;

}

function searchProduct() {

let input =
document.getElementById("searchInput")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

let title =
card.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(input)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}