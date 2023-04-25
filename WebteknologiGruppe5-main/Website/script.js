const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

// Define an array to store the cart items
let cartItems = [];

// Get the cart items list element
const cartItemsList = document.querySelector('.cart-items');

// Get the cart total element
const cartTotal = document.getElementById('cart-total');

// Get the checkout button element
const checkoutBtn = document.getElementById('checkout-btn');

// Function to add an item to the cart
function addItemToCart(item) {
	// Add the item to the cart items array
	cartItems.push(item);

	// Update the cart items list
	updateCartItems();

	// Update the cart total
	updateCartTotal();
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
	// Remove the item from the cart items array
	cartItems.splice(index, 1);

	// Update the cart items list
	updateCartItems();

	// Update the cart total
	updateCartTotal();
}

// Function to update the cart items list
function updateCartItems() {
	// Clear the existing cart items list
	cartItemsList.innerHTML = '';

	// Loop through the cart items and add each one to the list
	cartItems.forEach((item, index) => {
		const listItem = document.createElement('li');
		listItem.innerText = item.name + ' - $' + item.price;
		
		const removeBtn = document.createElement('button');
		removeBtn.innerText = 'Remove';
		removeBtn.addEventListener('click', () => {
			removeItemFromCart(index);
		});

		listItem.appendChild(removeBtn);
		cartItemsList.appendChild(listItem);
	});
}

// Function to update the cart total
function updateCartTotal() {
	// Calculate the total cost of the items in the cart
	const total = cartItems.reduce((acc, item) => acc + item.price, 0);

	// Update the cart total element
	cartTotal.innerText = total.toFixed(2);
}

// Add some sample items to the cart
addItemToCart({ name: 'Item 1', price: 10.99 });
addItemToCart({ name: 'Item 2', price: 5.99 });
addItemToCart({ name: 'Item 3', price: 6.99});
