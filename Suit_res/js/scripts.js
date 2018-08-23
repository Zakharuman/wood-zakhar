$(function() {

	var menuClass = $('.menu');

	$('.menu-tooggle').click(function(){
		if(menuClass.hasClass("act")) {
			menuClass.removeClass("act").hide(300);
		} else {
			menuClass.addClass("act").show(300);
		}
	});
	
});
