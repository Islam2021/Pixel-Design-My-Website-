$(document).ready(function() {
    // smoothscroll
    $(document).on("scroll", onScroll);
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.navbar-nav .nav-item').each(function() {
            $('.navbar-nav .nav-item').removeClass('active');
        })
        $(this).closest('.navbar-nav .nav-item').addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 1500, 'swing', function() {
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav .nav-item .nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav .nav-item').removeClass("active");
                $(this).closest('.navbar-nav .nav-item').addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }

    // navbar fixed postion
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });

    // scroll down arrow
    $('a.scroll-down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

    // portfolio filter
    var selectedClass = "";
    $(".filter").click(function() {
        selectedClass = $(this).attr("data-rel");
        $(".portfolio-container").fadeTo(100, 0.1);
        $(".portfolio-container > div > div").not("." + selectedClass).fadeOut().removeClass('scale-anm-0');
        setTimeout(function() {
            $("." + selectedClass).fadeIn().addClass('scale-anm-1');
            $(".portfolio-container").fadeTo(300, 1);
        }, 300);

    });

    // counter on scroll
    var num = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (num == 0 && $(window).scrollTop() > oTop) {
            $('.number-box').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            num = 1;
        }

    });

    // nav mobile show and hidden
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').show();
        $(".navbar-toggler").hide();
    })
    $(".close").click(function() {
        $(".navbar-collapse").removeClass('show');
        $(".navbar-toggler").show();
    });

});

// loading screen
$(window).on('load', function() {
    $(".overlay-loading .spinner").fadeOut(2000, function() {
        $(this).parent().fadeOut(2000, function() {
            $(this).remove();
        });
    });

    // nice scroll start

    $("body").niceScroll({
        cursorcolor: "#5d86ff",
        cursorwidth: "7px",
        scrollspeed: 60,
        mousescrollstep: 60,
        background: "",
        cursorborder: 0,
        cursorborderradius: "25px"
    }); // a world full of color!

});