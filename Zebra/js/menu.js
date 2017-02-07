var isOpened = false;

// window.onload = function () {
// 	// body...
// }

var check = function(){
	// alert("LOL");
	if(!isOpened){
		// alert("LOL");
		isOpened = true;
		$(".h-2").animate({width:"100%"});
		$(".mini").toggleClass('open',true);
		$(".mini").toggleClass('close',false);
		$(".h-2").toggleClass('hide',false);
		$(".h-2").toggleClass('show',true);
		$(".mobile-menu").toggleClass('animated',true);
		$(".mobile-menu").toggleClass('not-animated',false);
	}
	else{
		// alert("NOT-LOL");

		$(".h-2").toggleClass('show',false);
		$(".mini").toggleClass('open',false);
		$(".mini").toggleClass('close',true);
		$(".h-2").toggleClass('hide',true);
		$(".h-2").animate({width:0});
		isOpened = false;
		$(".mobile-menu").toggleClass('not-animated',true);
		$(".mobile-menu").toggleClass('animated',false);
	}
}