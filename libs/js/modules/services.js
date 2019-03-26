$(document).ready(function() {
    if ($('div[class*="anim"]').length > 0) {
        console.log('run animations');
        var animateElements = function () {
                var $animElems = $('div[class*="anim"]'),
                    addAnimationClass = function () {
                        $animElems.each(function (idx, item) {
                            var topofElem = $(item).offset().top;

                            if ( topofElem < ( $(window).scrollTop() + ($(window).height() / 1.25)) ) {
                                if (!$(item).hasClass('active')) {
                                    $(item).addClass('active');
                                }
                            }
                        });
                    };

                    $(window).on('scroll', function () {
                        addAnimationClass();
                    });
                    addAnimationClass();
        };
        
        $(window).on('load', animateElements());
    }
});