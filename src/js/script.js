const hamburger = document.querySelector('.hamburger-container');
const stick = document.querySelector('.stick');
const navbar = document.querySelector('.navbar');
const cartIcon = document.querySelector('.cart-icon');

hamburger.addEventListener('click', () => {
	stick.classList.toggle('trigger');
	navbar.classList.toggle('active');
	if (navbar.classList.contains('active')) {
		cartIcon.style.display = 'none';
	} else {
        cartIcon.style.display = 'block';
    }
});
