$(window).load(function(){setTimeout(function(){$(".loader").delay(100).fadeOut().remove();},2000);});var StickyElement=function(node){var doc=$(document),fixed=false,anchor=node.find('.sticky-anchor'),content=node.find('.sticky-content');var onScroll=function(e){var docTop=doc.scrollTop(),anchorTop=anchor.offset().top;console.log('scroll',docTop,anchorTop);if(docTop>anchorTop){if(!fixed){anchor.height(content.outerHeight());content.addClass('fixed');fixed=true;}}else{if(fixed){anchor.height(0);content.removeClass('fixed');fixed=false;}}};$(window).on('scroll',onScroll);};var demo=new StickyElement($('#sticky'));$(".button-menu").on("click",function(){$(".down-menu").slideToggle('medium');});$(document).ready(function(){var carousel=$("#carousel");carousel.owlCarousel({items:             4,
	
	// 5 блоков на компьютерах (экран от 1400px до 901px)
	itemsDesktop:      [1400, 4],
	
	// 3 блока на маленьких компьютерах (экран от 900px до 601px)
	itemsDesktopSmall: [900, 3],
	
	// 2 элемента на планшетах (экран от 600 до 480 пикселей)
	itemsTablet:       [600, 2],
	
	// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
	itemsMobile:       [480, 1]});$('#js-prev').click(function(){carousel.trigger('owl.prev');return false;});$('#js-next').click(function(){carousel.trigger('owl.next');return false;});});