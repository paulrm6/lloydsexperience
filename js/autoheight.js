/*
A javascript function using jqeury to resize the height of anything with a class of "autoheight" to the full height of the browser window on page load and browser resize.
*/

function resizeContent(){
	$('.autoheight').height( $(window).height() - 140 )
}

$(document).ready(function() {
	resizeContent();
});

$(window).resize(function() {
	resizeContent();
});