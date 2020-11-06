$(function(){
	// $('.title').on('click', function(){
	// 	$(this).css('opacity',0.5);
	// });

	$('.hamburger').on('click', function(){
		$(this).toggleClass('on');

	});

	$('.hamburger').on('click', function(){
		$('.target').toggleClass('hide');
	});


});