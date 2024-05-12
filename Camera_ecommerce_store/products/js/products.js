//----------------language-burger--------------

const menu = document.querySelector('.header__navigation-ul');
const menuBtn = document.querySelector('.hamburger');
const body = document.body;


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

//----------------MORE-INFO-FROM-CHARACTERISTICS--------------

function moreInfoFunction(e) {
   e.preventDefault();
   moreInfo = document.getElementById('details-moreInfo');
   characteristics = document.getElementById('details-characteristics');

   characteristics.classList.toggle('all-characteristics');

   if (characteristics.classList.contains('all-characteristics')) {
      moreInfo.innerHTML = `Close Tech Specs`;
   } else {
      moreInfo.innerHTML = `View All Tech Specs`;
   }
};

//----------------SEARCH--------------

function search() {
   headerNavigation = document.querySelector('.header__navigation');
   searchInput = document.getElementById('searchInput');
   const screenWidth = window.innerWidth;

   if(searchInput.value == '' && searchInput.classList.contains('search-open')){
      searchInput.classList.remove('search-open');
      if (screenWidth <= 1145){
         headerNavigation.style.display = 'flex';
      }
   } else if(searchInput.value == '' && !searchInput.classList.contains('search-open')){
      searchInput.classList.add('search-open');
      if (screenWidth <= 1145){
         headerNavigation.style.display = 'none';
      }
   }else{
      console.log('Search');
   }
}

//----------------CHANGE-PHOTO-IN-MAIN-PART--------------

function clearSlider(){
   var sliderItems = document.querySelectorAll('.slider__item');

   sliderItems.forEach(function(item) {
      if (item.classList.contains('active')) {
         item.classList.remove('active');
      }
   });
}

//----------------CHANGE-PHOTO-IN-BIG-SLIDER--------------

function productSlider(sliderName) {
   clearSlider();
   document.getElementById('photo'+sliderName).classList.add('active');
   document.getElementById('activePhoto').src = `img/Thumbnail`+sliderName+`.png`;
}



//BIG-SLIDER

$(document).ready(function () {
   $('.big__slider-continer').slick({
     dots: false,
     arrows: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     waitForAnimate: true,
   });
 });
 
 function newBigSlider(newSliderNum) {
   var newSliderNumMin1 = newSliderNum - 1;
   $('.big__slider-continer').slick('slickGoTo', newSliderNumMin1);
 }
 
 function openSlider(sliderNum) {
   newBigSlider(sliderNum);
   document.getElementById('bigSlider').classList.add('big-slider-open');
   body.classList.toggle('lock');
 }
 
 document.getElementById('returnButton').addEventListener('click', function (e) {
   body.classList.toggle('lock');
   document.getElementById('bigSlider').classList.remove('big-slider-open');
 });
 

 //COMMENTS-SLIDER

$(document).ready(function () {
   $('.comments__slider').slick({
     dots: false,
     arrows: false,
     slidesToShow: 4 ,
     slidesToScroll: 4,
     infinite: false,
     responsive:[
      {
         breakpoint: 1170,
         settings: {
            slidesToShow:3,
            slidesToScroll:3,
         }
      },{
         breakpoint: 860,
         settings: {
            slidesToShow:2,
            slidesToScroll:2,
         }
      },{
         breakpoint: 580,
         settings: {
            slidesToShow:1,
            slidesToScroll:1,
         }
      },
   ]
   });
 });

//LIKE-SLIDER

$(document).ready(function () {
   $('.like__slider').slick({
     dots: false,
     arrows: true,
     slidesToShow: 4,
     slidesToScroll: 2,
     infinite: false,
     responsive:[
      {
         breakpoint: 1315,
         settings: {
            slidesToShow:3,
            slidesToScroll:3,
         }
      },{
         breakpoint: 992,
         settings: {
            slidesToShow:2,
            slidesToScroll:2,
         }
      },{
         breakpoint: 690,
         settings: {
            slidesToShow:1,
            slidesToScroll:1,
         }
      },
   ]
   });
 });