
$(document).ready(function(){
	$(".aboutButton h3").hover(function(){
		$(this).css("color", "white");
		$(this).css("text-decoration", "underline");
		$(this).css('opacity', '1.0');
	}, function(){
		$(this).css("color", "#25363d");
		$(this).css("text-decoration", "none");
		$(this).css('opacity', '0.7');
	});
$(".workButton h3").hover(function(){
		$(this).css("color", "white");
		$(this).css("text-decoration", "underline");
	}, function(){
		$(this).css("color", "#25363d");
		$(this).css("text-decoration", "none");
	});
$(".contactButton h3").hover(function(){
		$(this).css("color", "white");
		$(this).css("text-decoration", "underline");
	}, function(){
		$(this).css("color", "#25363d");
		$(this).css("text-decoration", "none");
	});
$('#cloud1_1_').delay(800).fadeOut();

});