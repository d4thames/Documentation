/*
	Watermark v3.1.3 (March 22, 2011) plugin for jQuery
	http://jquery-watermark.googlecode.com/
	Copyright (c) 2009-2011 Todd Northrop
	http://www.speednet.biz/
	Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(a,h,y){var w="function",v="password",j="maxLength",n="type",b="",c=true,u="placeholder",i=false,t="watermark",g=t,f="watermarkClass",q="watermarkFocus",l="watermarkSubmit",o="watermarkMaxLength",e="watermarkPassword",d="watermarkText",k=/\r/g,s="input:data("+g+"),textarea:data("+g+")",m="input:text,input:password,input[type=search],input:not([type]),textarea",p=["Page_ClientValidate"],r=i,x=u in document.createElement("input");a.watermark=a.watermark||{version:"3.1.3",runOnce:c,options:{className:t,useNative:c,hideBeforeUnload:c},hide:function(b){a(b).filter(s).each(function(){a.watermark._hide(a(this))})},_hide:function(a,r){var p=a[0],q=(p.value||b).replace(k,b),l=a.data(d)||b,m=a.data(o)||0,i=a.data(f);if(l.length&&q==l){p.value=b;if(a.data(e))if((a.attr(n)||b)==="text"){var g=a.data(e)||[],c=a.parent()||[];if(g.length&&c.length){c[0].removeChild(a[0]);c[0].appendChild(g[0]);a=g}}if(m){a.attr(j,m);a.removeData(o)}if(r){a.attr("autocomplete","off");h.setTimeout(function(){a.select()},1)}}i&&a.removeClass(i)},show:function(b){a(b).filter(s).each(function(){a.watermark._show(a(this))})},_show:function(g){var p=g[0],u=(p.value||b).replace(k,b),h=g.data(d)||b,s=g.attr(n)||b,t=g.data(f);if((u.length==0||u==h)&&!g.data(q)){r=c;if(g.data(e))if(s===v){var m=g.data(e)||[],l=g.parent()||[];if(m.length&&l.length){l[0].removeChild(g[0]);l[0].appendChild(m[0]);g=m;g.attr(j,h.length);p=g[0]}}if(s==="text"||s==="search"){var i=g.attr(j)||0;if(i>0&&h.length>i){g.data(o,i);g.attr(j,h.length)}}t&&g.addClass(t);p.value=h}else a.watermark._hide(g)},hideAll:function(){if(r){a.watermark.hide(m);r=i}},showAll:function(){a.watermark.show(m)}};a.fn.watermark=a.fn.watermark||function(p,o){var t="string";if(!this.length)return this;var s=i,r=typeof p===t;if(r)p=p.replace(k,b);if(typeof o==="object"){s=typeof o.className===t;o=a.extend({},a.watermark.options,o)}else if(typeof o===t){s=c;o=a.extend({},a.watermark.options,{className:o})}else o=a.watermark.options;if(typeof o.useNative!==w)o.useNative=o.useNative?function(){return c}:function(){return i};return this.each(function(){var B="dragleave",A="dragenter",z=this,i=a(z);if(!i.is(m))return;if(i.data(g)){if(r||s){a.watermark._hide(i);r&&i.data(d,p);s&&i.data(f,o.className)}}else{if(x&&o.useNative.call(z,i)&&(i.attr("tagName")||b)!=="TEXTAREA"){r&&i.attr(u,p);return}i.data(d,r?p:b);i.data(f,o.className);i.data(g,1);if((i.attr(n)||b)===v){var C=i.wrap("<span>").parent(),t=a(C.html().replace(/type=["']?password["']?/i,'type="text"'));t.data(d,i.data(d));t.data(f,i.data(f));t.data(g,1);t.attr(j,p.length);t.focus(function(){a.watermark._hide(t,c)}).bind(A,function(){a.watermark._hide(t)}).bind("dragend",function(){h.setTimeout(function(){t.blur()},1)});i.blur(function(){a.watermark._show(i)}).bind(B,function(){a.watermark._show(i)});t.data(e,i);i.data(e,t)}else i.focus(function(){i.data(q,1);a.watermark._hide(i,c)}).blur(function(){i.data(q,0);a.watermark._show(i)}).bind(A,function(){a.watermark._hide(i)}).bind(B,function(){a.watermark._show(i)}).bind("dragend",function(){h.setTimeout(function(){a.watermark._show(i)},1)}).bind("drop",function(e){var c=i[0],a=e.originalEvent.dataTransfer.getData("Text");if((c.value||b).replace(k,b).replace(a,b)===i.data(d))c.value=a;i.focus()});if(z.form){var w=z.form,y=a(w);if(!y.data(l)){y.submit(a.watermark.hideAll);if(w.submit){y.data(l,w.submit);w.submit=function(c,b){return function(){var d=b.data(l);a.watermark.hideAll();if(d.apply)d.apply(c,Array.prototype.slice.call(arguments));else d()}}(w,y)}else{y.data(l,1);w.submit=function(b){return function(){a.watermark.hideAll();delete b.submit;b.submit()}}(w)}}}}a.watermark._show(i)})};if(a.watermark.runOnce){a.watermark.runOnce=i;a.extend(a.expr[":"],{data:function(c,d,b){return!!a.data(c,b[3])}});(function(c){a.fn.val=function(){var e=this;if(!e.length)return arguments.length?e:y;if(!arguments.length)if(e.data(g)){var f=(e[0].value||b).replace(k,b);return f===(e.data(d)||b)?b:f}else return c.apply(e,arguments);else{c.apply(e,arguments);a.watermark.show(e);return e}}})(a.fn.val);p.length&&a(function(){for(var b,c,d=p.length-1;d>=0;d--){b=p[d];c=h[b];if(typeof c===w)h[b]=function(b){return function(){a.watermark.hideAll();return b.apply(null,Array.prototype.slice.call(arguments))}}(c)}});a(h).bind("beforeunload",function(){a.watermark.options.hideBeforeUnload&&a.watermark.hideAll()})}})(jQuery,window);

/*! Sidr - v1.1.1 - 2013-03-14
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(e){var t=!1,i=!1,o={isUrl:function(e){var t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),i=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof i&&""!==i&&"sidr-inner"!==i&&e.attr("class",i.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(o,n,s){"function"==typeof n?(s=n,n="sidr"):n||(n="sidr");var a,d,l,c=e("#"+n),f=e(c.data("body")),u=e("html"),p=c.outerWidth(!0),y=c.data("speed"),v=c.data("side");if("open"===o||"toogle"===o&&!c.is(":visible")){if(c.is(":visible")||t)return;if(i!==!1)return r.close(i,function(){r.open(n)}),void 0;t=!0,"left"===v?(a={left:p+"px"},d={left:"0px"}):(a={right:p+"px"},d={right:"0px"}),l=u.scrollTop(),u.css("overflow-x","hidden").scrollTop(l),f.css({width:f.width(),position:"absolute"}).animate(a,y),c.css("display","block").animate(d,y,function(){t=!1,i=n,"function"==typeof s&&s(n)})}else{if(!c.is(":visible")||t)return;t=!0,"left"===v?(a={left:0},d={left:"-"+p+"px"}):(a={right:0},d={right:"-"+p+"px"}),l=u.scrollTop(),u.removeAttr("style").scrollTop(l),f.animate(a,y),c.animate(d,y,function(){c.removeAttr("style"),f.removeAttr("style"),e("html").removeAttr("style"),t=!1,i=!1,"function"==typeof s&&s(n)})}}},r={open:function(e,t){o.execute("open",e,t)},close:function(e,t){o.execute("close",e,t)},toogle:function(e,t){o.execute("toogle",e,t)}};e.sidr=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof t&&"string"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.sidr"),void 0):r.toogle.apply(this,arguments)},e.fn.sidr=function(t){var i=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body"},t),n=i.name,s=e("#"+n);if(0===s.length&&(s=e("<div />").attr("id",n).appendTo(e("body"))),s.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body}),"function"==typeof i.source){var a=i.source(n);o.loadContent(s,a)}else if("string"==typeof i.source&&o.isUrl(i.source))e.get(i.source,function(e){o.loadContent(s,e)});else if("string"==typeof i.source){var d="",l=i.source.split(",");if(e.each(l,function(t,i){d+='<div class="sidr-inner">'+e(i).html()+"</div>"}),i.renaming){var c=e("<div />").html(d);c.find("*").each(function(t,i){var r=e(i);o.addPrefix(r)}),d=c.html()}o.loadContent(s,d)}else null!==i.source&&e.error("Invalid Sidr Source");return this.each(function(){var t=e(this),i=t.data("sidr");i||(t.data("sidr",n),t.click(function(e){e.preventDefault(),r.toogle(n)}))})}})(jQuery);


(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.remove(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);


(function(e){e.fn.extend({maccordion:function(t){var n={accordion:"true",speed:300,closedSign:"[+]",openedSign:"[-]"};var r=e.extend(n,t);var i=e(this);i.find("li").each(function(){if(e(this).find("ul").size()!=0){e(this).find("a:first").append("<span>"+r.closedSign+"</span>");if(e(this).find("a:first").attr("href")=="#"){e(this).find("a:first").click(function(){return false})}}});i.find("li.active").each(function(){e(this).parents("ul").slideDown(r.speed);e(this).parents("ul").parent("li").find("span:first").html(r.openedSign)});i.find("li a").click(function(t){if(e(this).parent().find("ul").size()!=0){if(r.accordion){if(!e(this).parent().find("ul").is(":visible")){parents=e(this).parent().parents("ul");visible=i.find("ul:visible");visible.each(function(t){var n=true;parents.each(function(e){if(parents[e]==visible[t]){n=false;return false}});if(n){if(e(this).parent().find("ul")!=visible[t]){e(visible[t]).slideUp(r.speed,function(){e(this).parent("li").removeClass(".open").find("span:first").html(r.closedSign)})}}})}}if(e(this).parent().find("ul:first").is(":visible")){t.stopPropagation();t.preventDefault();e(this).parent().find("ul:first").slideUp(r.speed,function(){e(this).parent("li").removeClass("open").find("span:first").delay(r.speed).html(r.closedSign)});return false}else{t.stopPropagation();t.preventDefault();e(this).parent().find("ul:first").slideDown(r.speed,function(){e(this).parent("li").addClass("open").find("span:first").delay(r.speed).html(r.openedSign)})}}})}})})(jQuery)

/*
 * Treeview 1.4.1 - jQuery plugin to hide and show branches of a tree
 * 
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 * http://docs.jquery.com/Plugins/Treeview
 *
 * Copyright (c) 2007 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.treeview.js 5759 2008-07-01 07:50:28Z joern.zaefferer $
 *
 */

;(function($) {

  // TODO rewrite as a widget, removing all the extra plugins
  $.extend($.fn, {
    swapClass: function(c1, c2) {
      var c1Elements = this.filter('.' + c1);
      this.filter('.' + c2).removeClass(c2).addClass(c1);
      c1Elements.removeClass(c1).addClass(c2);
      return this;
    },
    replaceClass: function(c1, c2) {
      return this.filter('.' + c1).removeClass(c1).addClass(c2).end();
    },
    hoverClass: function(className) {
      className = className || "hover";
      return this.hover(function() {
        $(this).addClass(className);
      }, function() {
        $(this).removeClass(className);
      });
    },
    heightToggle: function(animated, callback) {
      animated ?
        this.animate({ height: "toggle" }, animated, callback) :
        this.each(function(){
          jQuery(this)[ jQuery(this).is(":hidden") ? "show" : "hide" ]();
          if(callback)
            callback.apply(this, arguments);
        });
    },
    heightHide: function(animated, callback) {
      if (animated) {
        this.animate({ height: "hide" }, animated, callback);
      } else {
        this.hide();
        if (callback)
          this.each(callback);        
      }
    },
    prepareBranches: function(settings) {
      if (!settings.prerendered) {
        // mark last tree items
        this.filter(":last-child:not(ul)").addClass(CLASSES.last);
        // collapse whole tree, or only those marked as closed, anyway except those marked as open
        this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide();
      }
      // return all items with sublists
      return this.filter(":has(>ul)");
    },
    applyClasses: function(settings, toggler) {
      // TODO use event delegation
      this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview", function(event) {
        // don't handle click events on children, eg. checkboxes
        if ( this == event.target )
          toggler.apply($(this).next());
      }).add( $("a", this) ).hoverClass();
      
      if (!settings.prerendered) {
        // handle closed ones first
        this.filter(":has(>ul:hidden)")
            .addClass(CLASSES.expandable)
            .replaceClass(CLASSES.last, CLASSES.lastExpandable);
            
        // handle open ones
        this.not(":has(>ul:hidden)")
            .addClass(CLASSES.collapsable)
            .replaceClass(CLASSES.last, CLASSES.lastCollapsable);
            
              // create hitarea if not present
        var hitarea = this.find("div." + CLASSES.hitarea);
        if (!hitarea.length)
          hitarea = this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea);
        hitarea.removeClass().addClass(CLASSES.hitarea).each(function() {
          var classes = "";
          $.each($(this).parent().attr("class").split(" "), function() {
            classes += this + "-hitarea ";
          });
          $(this).addClass( classes );
        })
      }
      
      // apply event to hitarea
      this.find("div." + CLASSES.hitarea).click( toggler );
    },
    treeview: function(settings) {
      
      settings = $.extend({
        cookieId: "treeview"
      }, settings);
      
      if ( settings.toggle ) {
        var callback = settings.toggle;
        settings.toggle = function() {
          return callback.apply($(this).parent()[0], arguments);
        };
      }
    
      // factory for treecontroller
      function treeController(tree, control) {
        // factory for click handlers
        function handler(filter) {
          return function() {
            // reuse toggle event handler, applying the elements to toggle
            // start searching for all hitareas
            toggler.apply( $("div." + CLASSES.hitarea, tree).filter(function() {
              // for plain toggle, no filter is provided, otherwise we need to check the parent element
              return filter ? $(this).parent("." + filter).length : true;
            }) );
            return false;
          };
        }
        // click on first element to collapse tree
        $("a:eq(0)", control).click( handler(CLASSES.collapsable) );
        // click on second to expand tree
        $("a:eq(1)", control).click( handler(CLASSES.expandable) );
        // click on third to toggle tree
        $("a:eq(2)", control).click( handler() ); 
      }
    
      // handle toggle event
      function toggler() {
        $(this)
          .parent()
          // swap classes for hitarea
          .find(">.hitarea")
            .swapClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
            .swapClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea )
          .end()
          // swap classes for parent li
          .swapClass( CLASSES.collapsable, CLASSES.expandable )
          .swapClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
          // find child lists
          .find( ">ul" )
          // toggle them
          .heightToggle( settings.animated, settings.toggle );
        if ( settings.unique ) {
          $(this).parent()
            .siblings()
            // swap classes for hitarea
            .find(">.hitarea")
              .replaceClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
              .replaceClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea )
            .end()
            .replaceClass( CLASSES.collapsable, CLASSES.expandable )
            .replaceClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
            .find( ">ul" )
            .heightHide( settings.animated, settings.toggle );
        }
      }
      this.data("toggler", toggler);
      
      function serialize() {
        function binary(arg) {
          return arg ? 1 : 0;
        }
        var data = [];
        branches.each(function(i, e) {
          data[i] = $(e).is(":has(>ul:visible)") ? 1 : 0;
        });
        $.cookie(settings.cookieId, data.join(""), settings.cookieOptions );
      }
      
      function deserialize() {
        var stored = $.cookie(settings.cookieId);
        if ( stored ) {
          var data = stored.split("");
          branches.each(function(i, e) {
            $(e).find(">ul")[ parseInt(data[i]) ? "show" : "hide" ]();
          });
        }
      }
      
      // add treeview class to activate styles
      this.addClass("treeview");
      
      // prepare branches and find all tree items with child lists
      var branches = this.find("li").prepareBranches(settings);
      
      switch(settings.persist) {
      case "cookie":
        var toggleCallback = settings.toggle;
        settings.toggle = function() {
          serialize();
          if (toggleCallback) {
            toggleCallback.apply(this, arguments);
          }
        };
        deserialize();
        break;
      case "location":
        var current = this.find("a").filter(function() {
          return this.href.toLowerCase() == location.href.toLowerCase();
        });
          if ( !current.length ) {
              var loc = location.href.split("?");
              var current = this.find("a").filter(function() {
                  return this.href.toLowerCase() == loc[0].toLowerCase();
              });
          }
        if ( current.length ) {
          // TODO update the open/closed classes
          var items = current.addClass("selected").parents("ul, li").add( current.next() ).show();
          if (settings.prerendered) {
            // if prerendered is on, replicate the basic class swapping
            items.filter("li")
              .swapClass( CLASSES.collapsable, CLASSES.expandable )
              .swapClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
              .find(">.hitarea")
                .swapClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
                .swapClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea );
          }
        }
        break;
      }
      
      branches.applyClasses(settings, toggler);
        
      // if control option is set, create the treecontroller and show it
      if ( settings.control ) {
        treeController(this, settings.control);
        $(settings.control).show();
      }
      
      return this;
    }
  });
  
  // classes used by the plugin
  // need to be styled via external stylesheet, see first example
  $.treeview = {};
  var CLASSES = ($.treeview.classes = {
    open: "open",
    closed: "closed",
    expandable: "expandable",
    expandableHitarea: "expandable-hitarea",
    lastExpandableHitarea: "lastExpandable-hitarea",
    collapsable: "collapsable",
    collapsableHitarea: "collapsable-hitarea",
    lastCollapsableHitarea: "lastCollapsable-hitarea",
    lastCollapsable: "lastCollapsable",
    lastExpandable: "lastExpandable",
    last: "last",
    hitarea: "hitarea"
  });
  
})(jQuery);
 
jQuery(function(){

  jQuery(".ProductList .ProductWishlistContaint a").live("click",function(){


      var url = jQuery(this).parent().parent().parent().find(".ProductDetails a").attr("href");
      url = url.replace("http:","");
      url = url.replace("https:","");

      var wishlistUrl = jQuery(this).attr("href");


      jQuery.get(url,{},function(data){


          var SideListForm = jQuery(data).find("#SideProductAddToWishList");


          if(jQuery(SideListForm).find("input[type='radio']").length){


$.iModal({data:SideListForm.html(),title:"Add to wishlist",width: "300px"});

          

            return false;
          }else{
            window.location = wishlistUrl;
          }

      });

      return false;

  });



  jQuery("#cartForm").submit(function(){

  if(jQuery("#cartForm .mobile-view").is(":visible")){

    jQuery("#cartForm .desktop-view").detach();

  }else{

    jQuery("#cartForm .mobile-view").detach();
  }

    

  });

  jQuery("#LayoutMergeHolder").html(jQuery("#LayoutMerge").detach());
  jQuery("#LayoutMergeHolderBottom").html(jQuery("#LayoutMergeBottom").detach());

  jQuery('#responsive-menu-button, #close_handler_menu').sidr();
  jQuery('#quickSidrMenuRight, #close_handler_menu_right').sidr({
      name: 'sidr-right',
      side: 'right',
      source: function(name) {

        var tempData = jQuery("#TopMenu.deskView").html();
        tempData += jQuery("#MobilePagesMenu").html();

window.setTimeout(function(){
       jQuery("#sidr-right #Menu > ul").treeview({
    collapsed: true,
    animated: "medium",
    control:"#sidetreecontrol",
    persist: "location"
  });
     },100);

        return tempData;
      }

    });

  

  jQuery('body').imagesLoaded(calculateSideNavSize);

  if(jQuery(".SideCategoryListFlyout").length){

    jQuery(".SideCategoryListFlyout > ul").removeClass("sf-menu").removeClass("sf-vertical").addClass("category-list");
    jQuery(".SideCategoryListFlyout").removeClass("SideCategoryListFlyout");

  }

  jQuery(".category-list, #SideShopByBrand ul, .treeview #Menu > ul").treeview({
    collapsed: true,
    animated: "medium",
    control:"#sidetreecontrol",
    persist: "location"
  });

//$("#HomePageGrid").randomize("#HomePageGrid li");
//$("#HomePageGrid").randomize("#HomePageGrid li");

var loop = 0;
var anotherloop = 1;
jQuery(".ProductList li").not(".slider-item, .slide").each(function(){
	jQuery(this).addClass("item-"+(loop++%5)+"  item-count-"+(anotherloop++));

});

jQuery("#toggle_subcategory").toggle(function(){
    jQuery(this).removeClass("open");               
    jQuery(".SubCategoryList").slideUp();
},function(){
  jQuery(this).addClass("open");
  jQuery(".SubCategoryList").slideDown();
})

jQuery("#search_query").watermark("Enter Your Search", {useNative: false});
jQuery("#nl_email").watermark("Your Email", {useNative: false});
jQuery("#nl_first_name").watermark("Your Name", {useNative: false});

							
   
    
       
	if(!(jQuery(".pager").find(".CategoryPagination").length==1 || 	jQuery(".pager").find("select").length==1 ))
	jQuery(".pager").hide();
       
       
       if(jQuery(".CategoryDescription").html()!="")
       jQuery("#CategoryTitle").remove();

       var path = window.location.pathname;
	   

        jQuery("#Menu li a").each(function(){
               if(path==jQuery(this)[0].pathname || path == "/"+jQuery(this)[0].pathname)
                 jQuery(this).parent().addClass("ActivePage");
               })
       jQuery(".category-list li a").each(function(){
          if(path==jQuery(this)[0].pathname || path == "/"+jQuery(this)[0].pathname ){
                jQuery(this).parent().addClass("ActivePage");
          }
          });
       
       jQuery(".category-list li").each(function(){
                             
            if(jQuery(this).find(".ActivePage").length>0){
	            jQuery(this).find("a").parent().find("ul:first").slideDown(500).parent().addClass("open");
            }
            
            });

       	calculateSideNavSize();

});

function calculateSideNavSize(){
	
	

if(jQuery(window).width()>768) {
  
  if(jQuery("#sidr").find(".SideNav").length){
  var SlideNav =  jQuery(".SideNav").detach();
  jQuery(".MaxWidth").prepend(SlideNav);

  var MovingPanel = jQuery("#MovingPanel").detach();
   jQuery("#DesktopCapturePanel").html(MovingPanel);

}

  jQuery(".SideNav").height("auto");
  jQuery(".MainContainer").height("auto");

	if(jQuery(".SideNav").height() < jQuery(document).height()){
  
		jQuery(".SideNav").height(jQuery(document).height());
	}
	if(jQuery(".SideNav").height() < jQuery(".MainContainer").height()){
  
		jQuery(".SideNav").height(jQuery(".MainContainer").height());
	}



}
else{

if(!jQuery("#sidr .SideNav").length){
   var SlideNav =  jQuery(".SideNav").height("none").detach();
   jQuery("#sidr").html(SlideNav);

if(!jQuery("#MobileCapturePanel").find("#SearchForm").length){
   var MovingPanel = jQuery("#MovingPanel").detach();
   jQuery("#MobileCapturePanel").html(MovingPanel);
}
}
}


}

jQuery(window).resize(function(){
	calculateSideNavSize();
  
});
var msnry;

$(window).load(function(){
        //Masonry
        $(".ProductList").animate({opacity: 1}, 750);
         msnry =  $(".ProductList").masonry({
            itemSelector    : 'li',
            columnWidth    : 3,
            isAnimated: true,
            animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false

            
          }
        });
    
if(!jQuery(".lt-ie9").length){	
    jQuery(".ProductList").masonry( 'on', 'layoutComplete', calculateSideNavSize );
}

    window.setTimeout(calculateSideNavSize,1000);
    
});