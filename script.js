document.addEventListener('DOMContentLoaded', function () {
    // Sample shopping list array
    const shoppingList = [];

    // Function to add item to the shopping list
    function addItemToShoppingList(item) {
        shoppingList.push(item);
        updateShoppingList();
    }

    // Function to update the displayed shopping list
    function updateShoppingList() {
        const shoppingListContainer = document.getElementById('shopping-list');
        shoppingListContainer.innerHTML = '<h2>Shopping List</h2>';

        if (shoppingList.length > 0) {
            const ul = document.createElement('ul');
            shoppingList.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            shoppingListContainer.appendChild(ul);
        } else {
            shoppingListContainer.innerHTML += '<p>Your shopping list is empty.</p>';
        }
    }

    // Example: Adding an item to the shopping list
    addItemToShoppingList('Milk');
    addItemToShoppingList('Eggs');
    addItemToShoppingList('Flour');

    // Slideshow logic
    let currentSlideIndex = 0;

    function showSlide(index) {
        // Logic to display the slideshow content
    }

    // Next slide button click event
    document.getElementById('next-slide-btn').addEventListener('click', function () {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    });

    // Previous slide button click event
    document.getElementById('prev-slide-btn').addEventListener('click', function () {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            showSlide(currentSlideIndex);
        }
    });

    // Define removeFromCart function
    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
    }

    // Simple front-end cart functionality
    const cart = [];

    function addToCart(item) {
        cart.push(item);
        renderCart();
    }

    function renderCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = ''; // Clear the cart

        // Render the new cart contents
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function () {
                removeFromCart(index);
            };
            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);
        });
    }

    // Next and previous buttons
    function processCheckout() {
        alert('Checkout processed successfully!');
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        // ... implementation of showSlides
    }
});
    // Event listener for "Add to Cart" buttons
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const item = event.target.getAttribute('data-item');
            addToCart(item);
        }
    });

    // ... (your existing code)

    // Simple front-end cart functionality
    const cart = [];

    function addToCart(item) {
        cart.push(item);
        renderCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
    }

    function renderCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = ''; // Clear the cart
    }