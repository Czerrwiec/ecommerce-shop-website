const hamburger = document.querySelector('.hamburger-container');
const stick = document.querySelector('.stick');
const navbar = document.querySelector('.navbar');
const cartIcon = document.querySelector('.cart-icon');
const MainImg = document.getElementById('MainImg')
const smallImg = document.querySelectorAll('.small-img') 
const productBox = document.querySelectorAll('.product-box')

hamburger.addEventListener('click', () => {
	stick.classList.toggle('trigger');
	navbar.classList.toggle('active');
	if (navbar.classList.contains('active')) {
		cartIcon.style.display = 'none';
	} else {
        cartIcon.style.display = 'block';
    }
});

smallImg.forEach(item => {
	item.addEventListener('click', () => {
		MainImg.src = item.src
	})
})

productBox.forEach(item => {
	item.addEventListener('click', () => {
		window.location.href = 'single-product.html'
	})
})