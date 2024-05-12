const body = document.body;
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.humburger');
const sliderButtons = document.querySelectorAll('.slider__head-button');
const langFooter = document.querySelector('.info__land-box');
const languagesFooter =document.querySelector('.info__languaches');

const windowInnerWidth = window.innerWidth;

//----------------language-burger--------------
if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})



	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

//----------------ANIMATION----------------------

//function onEntry(entry) {
//	entry.forEach(change => {
//		if (change.isIntersecting) {
//			change.target.classList.add('element-show');
//		} else{
//			change.target.classList.remove('element-show');
//		}
//	});
//}
//let options = {
//	threshold: [0.5] };
//let observer = new
//IntersectionObserver(onEntry, options);
//let elements =
//document.querySelectorAll('.el-anima');
//for (let elm of elements) {
//	observer.observe(elm);
//}


//----------------Slider----------------------

$(document).ready(function(){
	$('.slider__items').slick({
		fade: true,
		arrows: false,
		dots: true,
		draggable:false,
		swipe:false,
	});
});

document.querySelector('.slider-but1').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('slick-slide-control00').click();
	for (let index = 0; index < sliderButtons.length; index++) {
		const sliderButton = sliderButtons[index];
		sliderButton.style.border="1px solid #000000";
		document.querySelector('.slider-but1').style.border="1px solid #A962FF";
	}
});
document.querySelector('.slider-but2').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('slick-slide-control01').click();
	for (let index = 0; index < sliderButtons.length; index++) {
		const sliderButton = sliderButtons[index];
		sliderButton.style.border="1px solid #000000";
		document.querySelector('.slider-but2').style.border="1px solid #A962FF";
	}
});
document.querySelector('.slider-but3').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('slick-slide-control02').click();
	for (let index = 0; index < sliderButtons.length; index++) {
		const sliderButton = sliderButtons[index];
		sliderButton.style.border="1px solid #000000";
		document.querySelector('.slider-but3').style.border="1px solid #A962FF";
	}
});
document.querySelector('.slider-but4').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('slick-slide-control03').click();
	for (let index = 0; index < sliderButtons.length; index++) {
		const sliderButton = sliderButtons[index];
		sliderButton.style.border="1px solid #000000";
		document.querySelector('.slider-but4').style.border="1px solid #A962FF";
	}
});
document.querySelector('.slider-but5').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('slick-slide-control04').click();
	for (let index = 0; index < sliderButtons.length; index++) {
		const sliderButton = sliderButtons[index];
		sliderButton.style.border="1px solid #000000";
		document.querySelector('.slider-but5').style.border="1px solid #A962FF";
	}
});

$(document).ready(function(){
	$('.join__com').slick({
		dots:false,
		arrows:false,
		centerMode:true,
		autoplay:true,
		autoplaySpeed:2000,
	});
});

//----------------language-footer--------------


if (windowInnerWidth<767){
	langFooter.addEventListener('click', e => {
		languagesFooter.classList.toggle="footer-open";
	})
};