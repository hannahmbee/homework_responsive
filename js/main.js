$(function () {
	$('.hamburger').on('click', function(e) {
		e.preventDefault();
		$('nav').slideToggle();
	});
});