var cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " has been added to the cart.");
}

function buy() {
    if (cart.length > 0) {
        alert("You have purchased: " + cart.join(", "));
        cart = []; // Empty the cart
    } else {
        alert("Your cart is empty.");
    }
}

window.onload = function() {
    var cartDiv = document.getElementById("cart");
    for (var i = 0; i < cart.length; i++) {
        var p = document.createElement("p");
        p.textContent = cart[i];
        cartDiv.appendChild(p);
    }
};

document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
        var price = parseFloat(this.parentElement.previousElementSibling.querySelector('.item-price').textContent);
        var total = parseFloat(document.getElementById('cart-total').textContent);
        document.getElementById('cart-total').textContent = (total + price).toFixed(2);
    });
});


