

//PIE 6/7/8
$(function() {
    if (window.PIE) {
        $('#globalNav li span, #News .rssArea, #recruit #nav > li, #recruit .group, #AboutUs #nav > li, #AboutUs #asidePanel, #AboutUs #asidePanel .inner').each(function() {
            PIE.attach(this);
        });
    }
});

;(function($) {
	$.fn.tile = function(columns) {
		var tiles, max, c, h, last = this.length - 1, s;
		if(!columns) columns = this.length;
		this.each(function() {
			s = this.style;
			if(s.removeProperty) s.removeProperty("height");
			if(s.removeAttribute) s.removeAttribute("height");
		});
		return this.each(function(i) {
			c = i % columns;
			if(c == 0) tiles = [];
			tiles[c] = $(this);
			h = tiles[c].height();
			if(c == 0 || h > max) max = h;
			if(i == last || c == columns - 1)
				$.each(tiles, function() { this.height(max); });
		});
	};
})(jQuery);

function sameHight(){
	$("#recruit #nav > li").tile(4);
	$("#AboutUs #nav > li").tile(2);
	$("#AboutUs #nav.nav2 > li").tile(3);
};

$(function(){
	$(window).on('load',function(){
		setTimeout(function(){
			sameHight();
		},500);
	});
});

$(function(){
	$('#controlInner').on('mousedown',function(){
		setTimeout(function(){
			sameHight();
		},500);
	});
});



$(function() {
	var Recommend = $("#CarouselCont ul").carouFredSel({
		circular: false,
		infinite: true,
		auto 	: true,
		auto: 3000,
		prev	: {	
			button	: "#foo2_prev",
			key		: "left"
		},
		next	: { 
			button	: "#foo2_next",
			key		: "right"
		},
		pagination	: "#foo2_pag"
	});
});
$(function() {
	$(document).on('click','#carouselFull .carouOpen',function(){
		$("#CarouselCont ul").trigger("destroy", true);
		$("#CarouselCont").hide().slideDown(1000).show();
		$(this).removeClass("carouOpen").addClass("carouLive");
	});
	$(document).on('click','#carouselFull .carouLive',function(){
		$("#CarouselCont ul").carouFredSel({
			circular: false,
			circular: false,
			infinite: true,
			auto: 3000,
			prev	: {	
				button	: "#foo2_prev",
				key		: "left"
			},
			next	: { 
				button	: "#foo2_next",
				key		: "right"
			},
			pagination	: "#foo2_pag"
		});
		$(this).removeClass("carouLive").addClass("carouOpen");
	});

});

//Less IE7
$(function(){
	$(".lt-ie9 #Alert li").append('<img src="/lib/img/cmn/ie/icon-alert2.png" id="alertIcon">');
});

