
$(document).ready(function() {
	
	//$('#HeaderLower #PagesMenu .First').remove();
	var catHTML = $('#HeaderLower .CategoryList > .BlockContent > ul').html();
	var pageHTML = $('#HeaderLower .PagesMenu > .BlockContent > ul').html();
	$('#HeaderLower #Menu > ul').append(catHTML);
	$('#HeaderLower #Menu > ul').append(pageHTML);
	$('#HeaderLower .CategoryList').remove();
	$('#HeaderLower #PagesMenu').remove();

	$('#prodAccordion .Block h2').click(function() {

		jQuery(this).next(".prodAccordionContent").slideToggle(300,calculateSideNavSize);
		$(this).parent().toggleClass('current');
		
		return false;
	});
	
	
	//menu
	$('#HeaderLower li').hover(function() {
		$(this).addClass('over');
		return false;
	},
	function() {
		$(this).removeClass('over');
	});
	$('#SideCategoryList ul.category-list > li > ul > li').hover(function() {
		$(this).addClass('subOver');
		return false;
	},
	function() {
		$(this).removeClass('subOver');
	});
	
	
	
	
	
	
	$('#HeaderLower li').each(function() {
		if ($(this).children('ul').size() != 0) {
			$(this).children('a').addClass('hasSub').append('<span class="sub-indicator"> </span>');	
		}
	});
	
	var num = $('#HeaderLower  li').size(); 

	$('.category-list .parent').each(function(i) {
        $(this).css('z-index', num - i);
  	});
	
	

	//currency display
   var currentCurrency = $('#currencyPrices span').html();
   currentCurrency = currentCurrency.substring(0,currentCurrency.length);
   $('#SideCurrencySelector .selCurr').html(currentCurrency);
   
   var currentCurrencyF = $('.CurrencyList').find('.Sel').html();
   $('.selected-currency').html(currentCurrencyF);	
  
   if ($('.ChooseCurrencyBox').size() == 1 ) {
   		$('.changeCurr').hide();	
   }
	if ($('.ChooseCurrencyBox').size() !=0 ) {
		$('.changeCurr').live("click",function() {


			if ($("#SideCurrencySelector .CurrencyList").is(':visible')) {
				
				$("#SideCurrencySelector .CurrencyList").stop(true,true).hide();	
				$(this).text('Change');
				
			} else {
				$(this).text('Cancel');
				$("#SideCurrencySelector .CurrencyList").stop(true,true).show();	
			}
			return false;
			
			
		
		});
	}
	
	
	
	
	
	//cartlink
	if($('.SideCart').size() != 0) {
		var cartItem = $('.SideCart .item strong').text();
		var cartTotal = $('.SideCart .total strong').text();
		$('.cartLink .item').text(cartItem + ' Items');
		$('.cartLink .total strong').text(cartTotal);
	}
	else{
		$('.cartLink .item').text('0 Item');
		//$('.cartLink .total strong').text(cartTotal);	
	}
	var selCurr = $('#currencyPrices span').text();

	$('.CartLink .curr').text(selCurr);
	
	// wishlish update 
	//$('.wishLink a').text('WISHLIST ('+$('#SideProductAddToWishList form label').size()+')');
	
	
	
	clearText();
	getActive();
	$('input[type=radio], input[type=checkbox], input[type=file]').not('.productOptionPickListSwatch input[type=radio], .productOptionViewRectangle input[type=radio]').uniform();
	$('select').uniform();
	
	
	
	$('tr').each(function() {
		$(this).children('td').first().addClass('Alpha');
		$(this).children('td').last().addClass('Omega');
	});	
	
	if ($('.phoneIcon span').text() == '') {
		$('.phoneIcon').hide();
	}
	$('.ProductList li').not('.ListView').each(function() {
		var title = $(this).find('.ProductName a').text();
		if (title.length > 75 ) {
			var shortText = $.trim(title).substring(0, 75).trim(this) + "...";
			$(this).find('.ProductName a').text(shortText);
		}
	}); 
	if ($('.ProductActionAdd:visible').size() != 0) {
		$('.ProductList').addClass('ProductActionAddEnabled');	
	};
	
	var maxHeight = 0;

	$('.Content .ProductList .border').not('.Feat').each(function(){
   		if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});
	$('.Content .ProductList .border').not('.Feat').height(maxHeight); 
	// margin botto if no paging and compare 
	
	
	
	
});
$(document).ajaxComplete(function() {
	$.uniform.restore("select.JSHidden");	
	$('select').not("div:parent[class^='uniform-']").uniform();
	$('input[type=radio], input[type=checkbox], input[type=file]').not('.productOptionPickListSwatch input, .productOptionViewRectangle input').uniform();
	
});	
$('#FormField_11, #FormField_21').live('change', function(){
	$.uniform.restore("select.JSHidden");	
	
});


$(window).load(function() {
	if ($('.WishListButton:visible').size() != 0) {
		
		$('html').click(function() {
			$('#SideProductAddToWishList .BlockContent').slideUp(300);
		 });
		
		
		$('.WishListButton').click(function(event){
			event.stopPropagation();
			x = $('.WishListButton').offset().left;
			y = $('.WishListButton').offset().top;
			$('#SideProductAddToWishList').css('top', y).css('left', x).css('position', 'absolute').show();
			$('#SideProductAddToWishList .BlockContent').slideToggle(300);
		});
		$('#SideProductAddToWishList .BlockContent').click(function(event){
			event.stopPropagation();
		});	
	}
	$('.prodAccordion > div > h2').click(function(){
		$('#SideProductAddToWishList .BlockContent').slideUp(300);
 	});		
	
	
});	


function clearText() {
	$('input[type=text]').not('input[readonly=readonly]').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
		});
	});
	
	$('textarea').not('textarea[readonly=readonly]').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
		});
	});
	
}

function getActive() {
	var wLoc = window.location.href.replace(config.ShopPath, '');
	$('.Left ul.category-list').addClass('lvl1');
	$('.Left ul.category-list > li > ul').addClass('lvl2');
	$('.Left ul.category-list > li > ul > li > ul').addClass('lvl3');
	$('.Left ul.category-list').removeClass('category-list');
	$('#HeaderLower a').each(function() {
		if ($(this).attr('href').replace(config.ShopPath, '') ==  wLoc) {
			$(this).closest('.parent').addClass('ActivePage');	
		}
	});
	if ($('.Breadcrumb').size() != 0) {
		$('.Breadcrumb ul').each(function() {
			if($(this).find('li:eq(1) a').size() != 0) {
				var breadLink = $(this).find('li:eq(1) a').attr('href').replace(config.ShopPath, '');
				
				$('#HeaderLower a').each(function() {
					if ($(this).attr('href').replace(config.ShopPath, '') ==  breadLink) {
						$(this).closest('.parent').addClass('ActivePage');	
					}
				});
			}
				
		});
	}	
			
	
	
	$('.Left li a').each(function() {
		if ($(this).attr('href').replace(config.ShopPath, '') ==  wLoc) {
			$(this).parent('li').addClass('ActivePage');	
		}
		if ($(this).parent().children('ul').size() != 0) {
			$(this).parent().addClass('hasSub');	
		}
		
		
	});	
	var lvl = $('.Left li.ActivePage').closest('ul').attr('class');
	if (lvl == 'lvl1') {
		if($('.ActivePage').hasClass('hasSub')) {
			$('.Left #SideCategoryList  .lvl1').after($('.ActivePage .lvl2'));
			$('.Left #SideCategoryList  .lvl1').remove();
		} else {
				
		}
		
	}
	if (lvl == 'lvl2') {
		if($('.ActivePage').hasClass('hasSub')) {
			$('.Left #SideCategoryList  .lvl1').after($('.ActivePage .lvl3'));
			$('.Left #SideCategoryList  .lvl1').remove();
		} else {
			$('.Left #SideCategoryList  .lvl1').after($('.Left li.ActivePage').closest('ul'));
			$('.Left #SideCategoryList  .lvl1').remove();	
		}
		
	}
	if (lvl == 'lvl3') {
		$('.Left #SideCategoryList  .lvl1').after($('.Left li.ActivePage').closest('ul'));
		$('.Left #SideCategoryList  .lvl1').remove();
	}	
	
}