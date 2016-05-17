$(document).ready(function() {
	
    $(".hamburger").bind('click', function () {
		$(".page-header.nav-opened").fadeTo( "slow", 0.2 );
		$(".page-header").toggleClass("nav-opened");
        $(".page-header.nav-opened").fadeTo( "slow", 1 ); 
	});
});
