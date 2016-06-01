 $(document).ready(function() {
	 
	$(".article-header-winter").css("opacity", 0 );
	$(".article-header-summer").css("opacity", 0 );
    $(".art-ph-wrap").css("opacity", 0 );	

var viewport = $(window).width();
var title = $('.article-title');
var lead = $('.article-lead');
var pheader = $('#pheader'); 
var source = $('.source');

var navopened = false;
var view = 0; // 0 == main; 1 == winter; 2 == summer;

var wstawMaintitle = function () {
new TimelineMax().from(title, 1.5, {ease: Back.easeOut, x: -900, opacity: 0}, "start")
				 .from(lead, 1, {ease: Back.easeOut, x: 900, opacity: 0}, "start")
				 .from(source, 2, {ease: Back.easeOut, y: -200, scale: 0}, 0.5, "start"); 

				 if (!$('#pheader').hasClass('nav-opened')) {
				 new TimelineMax().from(pheader, 1.2, {ease: Back.easeOut.config(3), scale: 0}, "start"); }
}

var summer1 = $('#summer1');
var litter = $('#little-winter');
var lummer = $('#little-summer');
var sasbg = $('#sas-ba-bg');
var sasm = $('#sas-ba-sm');

var loadPictures1 = function () {
    var temp;
    if (viewport > 900) {
		temp = sasbg;
	} else {
		temp = sasm;
	}
	
	$('.art-ph-wrap').fadeTo('slow', 1);
    new TimelineMax().from(summer1, 0.7, {rotation: 360, x: -800, y: 500, scale: 3}, "start")
	                 .from(litter, 0.7, {rotation: -360, x: -1000, y: -500, scale: 3}, "-=0.4")
					 .from(lummer, 1.2, {ease: Back.easeOut, opacity: 0, y: -400, borderRadius: 100, scale: 6}, "start")
					 .from(temp, 1, {ease: Bounce.easeOut, x: 900}, "-=0.4");

}


var mainOff = function () {
	$(".article-header-main").fadeTo( "slow", 0 ).css("display", "none");	
	$(".art-ph-wrap").css("opacity", 0 );
}

var mainOn = function () {
	$(".article-header-main").css("display", "block").fadeTo( "slow", 1 );
	
}


    wstawMaintitle();

	setTimeout(function() {
	loadPictures1();
	}, 1800); 
  
	 	 

    $(".hamburger").bind('click', function Klik() {
		
		$(".page-header.nav-opened").fadeTo( "slow", 0.7 );
		$(".page-header").toggleClass("nav-opened");
        $(".page-header.nav-opened").fadeTo( "slow", 1 );
		
		if (navopened == false) {
		$(title).css("opacity", 0);
        navopened = true;		
		} else {
		$(title).css("opacity", 1);
        navopened = false;		
		}
		return navopened;
	});	
	
	/*
	if (viewport >= 640 && $(".page-header").hasClass("nav-opened")) {
		$(".page-header").removeClass("nav-opened");
	} 
	*/
	
	$(".winter").bind('click', function () {
		
		if(view == 0) {
		   mainOff();
		   $(".article-header-winter").css("display", "block").fadeTo( "slow", 1 );		   
		} else if (view == 2) {
		   $(".article-header-summer").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-winter").css("display", "block").fadeTo( "slow", 1 );			   
		}
        view = 1; 
		
		wstawMaintitle();
		
	});	
	
	$(".summer").bind('click', function () {
		
		if(view == 0) {
		   mainOff();		
		   $(".article-header-summer").css("display", "block").fadeTo( "slow", 1 );
		} else if (view == 1) {
		   $(".article-header-winter").fadeTo( "slow", 0 ).css("display", "none");		
		   $(".article-header-summer").css("display", "block").fadeTo( "slow", 1 );			
		}
        view = 2;
		
		wstawMaintitle();
		
	});	

	$(".page-logo").bind('click', function () {
		if(view == 2) {
		   $(".article-header-summer").fadeTo( "slow", 0 ).css("display", "none");		
		   mainOn();
		} else if (view == 1) {
		   $(".article-header-winter").fadeTo( "slow", 0 ).css("display", "none");		
		   mainOn();			
		} else if (view == 0){
           $('.art-ph-wrap').fadeTo('fast', 0);
		   
		} 
        view = 0;
		
		wstawMaintitle();
	
	setTimeout(function() {
	loadPictures1();
	if (view == 0) {
		$('.art-ph-wrap').fadeTo( "slow", 1 );
	} }, 1800); 
	
    view = 0;
    	
	});	
	
});
