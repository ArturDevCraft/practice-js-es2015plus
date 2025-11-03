const getCart = () => {
	const cartItems = [...document.getElementsByClassName('cart__quantity')];
	const arr = [];
	cartItems.forEach((el) => {
		arr.push({
			name: el.innerText,
			qty: el.value,
			price: el.dataset.price,
		});
	});

	return arr;
};

const calculateSum = (...items) => {
	let sum = 0;
	items.forEach((item) => {
		const { qty, price } = item;
		sum += qty * price;
	});
	return sum;
};

const setTotalField = (total) => {
	const cartTotalEl = document.querySelector('.cart__total-price');
	cartTotalEl.innerText = total;
};

const calculateHandle = () => {
	const cartItems = getCart();
	const total = calculateSum(...cartItems);
	setTotalField(total);
};

const init = () => {
	const calculateBtn = document.querySelector('.cart__btn-calculate');
	calculateBtn.addEventListener('click', calculateHandle);
};

init();
