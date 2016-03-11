
//Tabs
$(function() {
	$("#newsTabs").tabs();
});

//Tooltip
$(function() {
	$("#tooltip01, #tooltip02, #tooltip03").appendTo(".nav.nav1");
	$("#tooltip04, #tooltip05, #tooltip06").appendTo(".nav.nav2");

	$(".lt-ie9 .navBlock").prepend('<img src="/lib/img/home/ie/bg-tooltip.png" width="32" height="15" alt="" class="toolArrow">');

	$(".navBlock h2 a").click(function(){
		var toolNum = $(".navBlock").index($(this).parents(".navBlock"));

		if($(".tooltip").eq(toolNum).css("display") == "block"){
			$(".tooltip, .toolArrow").hide();
		} else {
			$(".tooltip").hide().eq(toolNum).show();
			$(".toolArrow").hide();
			$(this).parents('.navBlock').find('.toolArrow').css({'display':'block'});
		}
		return false;
	});
	$(document).on("click",".closeTooltip",function(){
		$(".tooltip, .toolArrow").hide();
	});

})

//Top Carousel
$(function() {
	var $linkTum = $('#mainBnr')
	$.ajax({
		type: "GET",
		url: "/lib/hojin-mainbnr/mainbnr-url.html",
		dataType: 'html',
		beforeSend: function(xhr){
			xhr.overrideMimeType("text/html;charset=Shift_JIS");
		},
		success: function(data) {
			$linkTum.append(data);
			$("#mainBnrWrap").hide();

			var $carousel = $('#mainBnrImg'),
			$pager = $('#mainPager');
	 
			function getCenterThumb() {
				var $visible = $pager.triggerHandler( 'currentVisible' ),
					center = Math.floor($visible.length / 2);
				
				return center;
			}
		 
			$carousel.carouFredSel({
				items: {
					visible: 1
				},
				auto: 3000,
				scroll: {
					fx: "crossfade",
					onBefore: function( data ) {
						var src = data.items.visible.first().attr( 'src' );
						src = src.split( '-img-' ).join( '-btn-' );
		 
						$pager.trigger( 'slideTo', [ 'img[src="'+ src +'"]', -getCenterThumb() ] );
						$pager.find( 'img' ).removeClass( 'selected' );
					},
					onAfter: function() {
						$pager.find( 'img' ).eq( getCenterThumb() ).addClass( 'selected' );
					}
				},
				prev: $linkTum.find(".prev"),
				next: $linkTum.find(".next")
			});
			$pager.carouFredSel({
				width: '100%',
				height: 46,
				auto: false,
				items: {
					visible: 'odd'
				},
				onCreate: function() {
					var center = getCenterThumb();
					$pager.trigger( 'slideTo', [ -center, { duration: 0 } ] );
					$pager.find( 'img' ).eq( center ).addClass( 'selected' );
				}
			});
			$pager.find('img').click(function() {
				var src = $(this).attr( 'src' );
				src = src.split( '-btn-' ).join( '-img-' );
				$carousel.trigger( 'slideTo', [ 'img[src="'+ src +'"]'] );
			});
			$carousel.find('img').click(function(){
				window.location = $(this).attr('data-href');
			});

		},
		error:function() {
		}
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

//PIE 6/7/8
$(function() {
    if (window.PIE) {
        $('#globalNav li span, #mainBnr, #web21 a, #ibInner, #web21, #newsArea, .ui-tabs .ui-tabs-nav li,.asidePanel, .nav .navBlock, .tooltip, .tooltip h2').each(function() {
            PIE.attach(this);
        });
    }
});

//Mobile
$(function() {
	var ua = navigator.userAgent;
	if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod')>0 || (ua.indexOf('iPad')>0) || (ua.indexOf('Android')>0 && ua.indexOf('Mobile')>0)){
		$("#mainBnrWrap").addClass("mobileImg");
		$("#mainBnrWrap2").hide();
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
	$("#Hojin .navBlockIn ul").tile(3);
	$("#Hojin .nav.nav2 .navBlockIn ul").tile(3);
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



