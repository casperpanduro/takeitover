
// Developed by Casper Panduro

(function ( $ ) {
    $.fn.takeitover = function( options ) {
        $("body.takeitover-noscroll").css({
            "overflow-y": "hidden",
            "height": "100%"
        });
        var takeitoverElement = this;
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            speed: 500,
            easing: false,
            contentSelector: '.takeitover-content',
            background: 'rgba(255,255,255,0.95)',
            clickOnOverlay: true,
            closeButton: true,
            buttonColor: "black",
            before: null,
            callback: null
        }, options );
        

        // css to elements
        $(takeitoverElement).css({
            "cursor":"pointer"
        });

        // hide content
        $(settings.contentSelector).hide().css({
            "position":"fixed",
            "top":"100px",
            "left":"0px",
            "width":"100%",
            "height":"100%",
            "overflow-y":"scroll",
            "z-index": 999999,
            "opacity":0,
            "-webkit-overflow-scrolling": "touch"
        });

        // Append overlay
        $("body").append('<div class="takeitover-overlay" style="background: '+settings.background+'"></div>');

        // overlay css
        $(".takeitover-overlay").css({
            "position": "fixed",
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px",
            "display": "none",
            "opacity": "0",
            "z-index": "99999"
        });

        // closebtn
        if(settings.closeButton == true) {
            $("body").append('<div class="takeitover-closebtn"><span class="first"></span><span class="last"></span></div>');

            $(".takeitover-closebtn").css({
                "position":"fixed",
                "top":"30px",
                "right":"30px",
                "z-index":9999999,
                "width":30,
                "height":30,
                "opacity":0,
                "cursor":"pointer"
            }).hide();

            $(".takeitover-closebtn span").eq(0).css({
                "position":"absolute",
                "top":"50%",
                "left":"0px",
                "height":"2px",
                "width":"100%",
                "display":"block",
                "background":settings.buttonColor,
                "transform":"translateY(-50%) rotate(-45deg)",
                "-webkit-transform":"translateY(-50%) rotate(-45deg)",
                "-ms-transform":"translateY(-50%) rotate(-45deg)"
            });

            $(".takeitover-closebtn span").eq(1).css({
                "position":"absolute",
                "top":"50%",
                "left":"0px",
                "height":"2px",
                "width":"100%",
                "display":"block",
                "background":settings.buttonColor,
                "transform":"translateY(-50%) rotate(45deg)",
                "-webkit-transform":"translateY(-50%) rotate(45deg)",
                "-ms-transform":"translateY(-50%) rotate(45deg)"
            });
        }
        var easing;
        if(settings.easing == false) {
            easing = "";
        }
        else {  
          easing = settings.easing;
        }

        // easing
        var id = settings.contentSelector;

        // activating takeitover
        $(this).on("click", function(e){
            if ( $.isFunction( settings.before ) ) {
                settings.before.call( this );
            }
            var $element = $(this);
            
            var target = $element.attr("data-target");
            if(target == null) {
                target = settings.contentSelector;
                target = $element.next(target);
            }
            else {
                target = $(target);
            }
            $("body").css({
                "overflow-y": "hidden",
                "height": "100%"
            });
            $(".takeitover-overlay").show().animate({
                "opacity":1
            }, settings.speed);

            setTimeout(function(){
                if(settings.closeButton == true) {
                    $(".takeitover-closebtn").show().animate({
                        "opacity":1
                    }, settings.speed/2);
                };
                target.show();
                target.animate({
                    "top":"0px",
                    "opacity":1
                }, settings.speed/2, easing, function(){
                    if ( $.isFunction( settings.callback ) ) {
                        settings.callback.call( this );
                    }
                });
                
            }, settings.speed/2);
            e.preventDefault();
        });

        // close options
        var closeSelector;

        function closeTakeitover() {
            var $element = $(settings.contentSelector);
            $element.animate({
                "top":"100px",
                "opacity":0
            }, settings.speed/2, function(){
                $(this).hide();
            });
            $(".takeitover-closebtn").animate({
                "opacity":0
            }, settings.speed/2, function(){
                $(this).hide();
            });

            setTimeout(function(){
                $("body").css({
                    "overflow-y": "scroll",
                    "height": "auto"
                });
                $element.next(settings.contentSelector).show();
                $(".takeitover-overlay").animate({
                    "opacity":0
                }, settings.speed, function(){
                    $(this).hide();
                });
            }, settings.speed/2);
        };

        if(settings.clickOnOverlay == true) {
            // close when clicking overlay
            closeSelector = settings.contentSelector;
            $(closeSelector).click(function(e){
                if (e.target !== this) {
                    
                }
                else {
                    closeTakeitover();
                }
                return;

            });
        }   
        if(settings.closeButton == true) {
            $(document).on("click", ".takeitover-closebtn", function(){
                closeTakeitover();
            });
        }
        
        return this;
    };


 
}( jQuery ));



