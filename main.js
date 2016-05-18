 $(document).ready(function() {
	 
	 var view = 0; // 0 == main; 1 == winter; 2 == summer;

    $(".hamburger").bind('click', function Klik() {
		$(".page-header.nav-opened").fadeTo( "slow", 0.7 );
		$(".page-header").toggleClass("nav-opened");
        $(".page-header.nav-opened").fadeTo( "slow", 1 ); 
	});

	$(".article-header-winter").css("opacity", 0 );
	$(".article-header-summer").css("opacity", 0 );		
	
    $(".winter").bind('click', function () {
		if(view == 0) {
		   $(".article-header-main").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-winter").css("display", "block").fadeTo( "slow", 1 );		   
		} else if (view == 2) {
		   $(".article-header-summer").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-winter").css("display", "block").fadeTo( "slow", 1 );			   
		}
        view = 1;	
	});	
	
	$(".summer").bind('click', function () {
		if(view == 0) {
		   $(".article-header-main").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-summer").css("display", "block").fadeTo( "slow", 1 );
		} else if (view == 1) {
		   $(".article-header-winter").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-summer").css("display", "block").fadeTo( "slow", 1 );			
		}
        view = 2;
	});	

	$(".page-logo").bind('click', function () {
		if(view == 2) {
		   $(".article-header-summer").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-main").css("display", "block").fadeTo( "slow", 1 );
		} else if (view == 1) {
		   $(".article-header-winter").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-main").css("display", "block").fadeTo( "slow", 1 );			
		}
        view = 0;
	});	
	
});
