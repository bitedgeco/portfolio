'use strict';
function homeController() {
	console.log('homeController ran');
	$('.section').hide();
	$('.section').fadeIn();
	$('.nav-item').css('border-bottom', 'none');
    $('#home-nav').css('border-bottom', '2px solid #1d3550');
};