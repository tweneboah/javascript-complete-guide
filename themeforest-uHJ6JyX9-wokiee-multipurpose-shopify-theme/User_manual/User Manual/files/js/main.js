(function($) {
    "use strict";

    $(window).on("load", function() {
        var hash = location.hash;
        if (hash == '') return false;

		var page = document.location.href.match(/[^\/]+$/)[0];
        /*setTimeout(function() {
            $(window).scrollTop($(hash).offset().top-15)
        }, 100);*/

        $("#navmenu").find("a.active").removeClass("active");
        $("#navmenu").find("[href='" + page + "']").addClass("active");
    });
    $("body").on("click", "a", function(e) {
        if (!$(this).attr("href").includes('#eq') || $(this).parent().hasClass("level-0")) return true;
		var current_href = document.location.href.match(/[^\/]+$/)[0],
			current_pos = $(window).scrollTop(),
			href = $(this).attr("href"),
			hash = href.indexOf(".html") > -1 ? href.split(".html").pop() : href;

		var checkcurrentpage = href.indexOf(".html") > -1 ? href.split(".html").shift() : href;
		if(!current_href.includes(checkcurrentpage) && href.includes(".html")) return true;

		e.preventDefault();
		
		if($(this).hasClass("back_button")){
			if($(this).attr("href") != "#")
				window.location.href = $(this).attr("href");
			$(window).scrollTop($(this).attr("current_pos"));
		}
		else{
			window.location.href = hash;
			$(window).scrollTop($(hash).offset().top-15);
		}

		var page = document.location.href.match(/[^\/]+$/)[0];
		$("#navmenu").find("a.active").removeClass("active");
		$("#navmenu").find("[href='" + page + "']").addClass("active");

		if($(this).hasClass("back_button") || $(this).closest(".submenu").length){
			var $back_button = $(".col-menu").find(".back_button");
			if($back_button.length){
				$back_button.remove();
				$(".col-menu").removeClass('backstuckScroll');
			}
			return false;
		}
		
		current_href = current_href.includes('#eq') ? current_href : "#";
		$(".col-menu").append('<a href="'+current_href+'" class="back_button" current_pos="'+current_pos+'">< BACK</a>');
		stuckInit()
    });

    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $header = $('#header'),
        $pageContent = $('#pageContent'),
        $navmenu = $('#navmenu'),
        $colMenu = $pageContent.find('.col-menu'),
        $endoffile = $pageContent.find('.endoffile'),
        $ttMenuToggle = $('#tt-menu-toggle'),
        $ttBackToTop = $('#tt-back-to-top');

    /*
        stuck menu
    */
    if ($navmenu.length) {
        stuckInit();
        $window.resize(debouncer(function(e) {
            stuckInit();
        }));
    };

    function debouncer(func, timeout) {
        var timeoutID, timeout = timeout || 500;
        return function() {
            var scope = this,
                args = arguments;
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function() {
                func.apply(scope, Array.prototype.slice.call(args));
            }, timeout);
        }
    };

    function stuckInit() {
		var CONST = 60;
         var pageContentHeight = parseInt($(window).height() - CONST, 10),
                navmenuHeight = parseInt($navmenu.height(), 10),
                ttwindowWidth = window.innerWidth || $window.width(),
                valueScrollTop = $window.scrollTop();

        $window.scrollTop() > CONST ? stuckScrollInit() : stuckScrollRemove();
        $window.scroll(function() {
            $window.scrollTop() > CONST ? stuckScrollInit() : stuckScrollRemove();
        });

        function stuckScrollInit() {
            $navmenu.addClass('stuckScroll');
			$(".col-menu").find(".back_button").length && $(".col-menu").addClass('backstuckScroll');
        };

        function stuckScrollRemove() {
            $navmenu.removeClass('stuckScroll');
			$(".col-menu").find(".back_button").length && $(".col-menu").removeClass('backstuckScroll');
        };
        setTimeout(function() {

            ttwindowWidth >= 790 ? detectStuckHeight() : removeStuckHeight();

            function detectStuckHeight() {
                if (pageContentHeight <= navmenuHeight) {
                    $navmenu.addClass('stuck-height');
                } else {
                    $navmenu.removeClass('stuck-height');
                };
            };

            function removeStuckHeight() {
                $navmenu.removeClass('stuck-height');
            };

        }, 400);
    };

    /*
        menu
    */
    if ($navmenu.length) {
        //active
        var pathname = window.location.pathname,
            page = pathname.split(/[/ ]+/).pop();

		page = page == "" ? 'index.html' : page;
			
        $navmenu.find('li.level-0 > a').each(function() {
            var link = $(this).attr('href');
            if (page == link) {
                $(this).closest('li').addClass('active').children(".submenu").slideDown('300');
            }
        });
        //submenu(*go inside the page)
        $navmenu.on('click', '.level-0.active ul a', function() {
            $navmenu.find('.level-0.active a').each(function() {
                $(this).removeClass('active');
            });
            $(this).addClass('active');

        });
        $window.resize(function() {
            resizeHandler();
        });

        function resizeHandler() {
            if ($endoffile.length == 0) return false;
            var h = $endoffile.prev().outerHeight();
            var hf = $(window).innerHeight()-46;
            var d = hf - h;
            if (d <= 0) return false;
            $endoffile.css('padding-top', d);
        }
        resizeHandler();
    };
    /*
        mobile toggle
    */
    if ($ttMenuToggle.length && $colMenu.length) {
        $header.on('click', $ttMenuToggle, function(e) {
            var $this = $(this);

            $colMenu.toggleClass('is-open');

            $(document).mouseup(function(e) {
                if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                    $colMenu.removeClass('is-open');
                };
            });
        });
        $window.scroll(function() {
            if ($colMenu.hasClass('is-open')) {
                $ttMenuToggle.trigger('click');
            };
        });
    };
    /*
        button back to top
    */
    if ($ttBackToTop.length) {
        ttBackToTop();
    };

    function ttBackToTop() {
        $ttBackToTop.on('click', function(e) {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        $window.scroll(function() {
            $window.scrollTop() > 500 ? $ttBackToTop.stop(true.false).addClass('tt-show') : $ttBackToTop.stop(true.false).removeClass('tt-show');
        });
    };
})(jQuery);