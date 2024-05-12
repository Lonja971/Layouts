if (windowInnerWidth<746){
	$(document).ready(function(){
		$('.courses__box').slick({
			dots:false,
			arrows:true,
			Infinity:false,
			centerMode:false,
			infinite:false,
			adaptiveHeight:true,
		});
	});
	$(document).ready(function(){
		$('.dig__box').slick({
			dots:false,
			arrows:true,
			Infinity:false,
			centerMode:false,
			infinite:false,
			adaptiveHeight:true,
			slidesToShow: 2,
			slidesToScroll:1,
			responsive:[
				{
					breakpoint: 576,
					settings: {
						slidesToShow:1
					}
				}
			]
		});
	});
};
