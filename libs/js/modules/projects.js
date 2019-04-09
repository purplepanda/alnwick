$(document).ready(function() {
    $("a[href*='#img']").on("click", function () {
        var carousel = $(this).parent('.project').find('.project__carousel-wrapper');

        setTimeout(function() {
            carousel.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });    
        }, 150);
    }); 

    $("a[href*='#goppion']").on("click", function () {
        var carousel = $(this).parent('.nav-projects__item').find('.project__carousel-wrapper');

        setTimeout(function() {
            carousel.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });    
        }, 150);  
    });
    
//    if ($('#projects').length > 0) {
//        var selectedFilters = [];
//        
//        $(function () {
//            $('select').multipleSelect({
//                filter: true,
//                placeholder: "Filter By Type",
//                width: "100%",
//                onOpen: function () {},
//                onClose: function () {
//                    updateFilters();
//                    closeAllMenus();
//                }
//            });
//        });
//
//        function updateFilters() {
//            var filters        = $('.ms-drop li'),
//                projects       = $('.project'), 
//                currentFilters = selectedFilters;
//
//            filters.each(function (idx, item) {
//                if($(item).hasClass('selected')) {
//                    var filterCategory = $(item).find('input').prop('value');
//
//                    if (selectedFilters.indexOf(filterCategory) === -1) {
//                        selectedFilters.push(filterCategory); 
//                    }
//                } else {
//                    var filterCategory = $(item).find('input').prop('value');
//
//                    if (selectedFilters.indexOf(filterCategory) !== -1) {
//                        var index = selectedFilters.indexOf(filterCategory);
//                        selectedFilters.splice(index, 1); 
//                    }
//                }
//                
//            });
//            
//            selectedFilters = selectedFilters;
//            
//            if (selectedFilters.indexOf(currentFilters) === -1) {
//                applyFilters(selectedFilters);
//                $('html, body').animate({scrollTop: 0}, 500);
//            }
//        }
//      
//        function applyFilters(filters) {
//            var projects = $('.project');
//
//            if (filters.length > 0) {
//                projects.each(function (idx, item) {
//                    var category = $(item).data('type');
//
//                    if (filters.indexOf(category) === -1) {
//                        $(item).fadeOut();
//                    } else {
//                        $(item).fadeIn();  
//                    }
//                });
//            } else {
//                projects.each(function (idx, item) {
//                    $(item).fadeIn();
//                });
//            }
//        }
//    
//        function setFilterMenu() {
//            var filterSelect = $('.ms-parent');
//
//            if ( $(window).scrollTop() - 5 > filterSelect.position().top && !filterSelect.hasClass('fixed-filter') ) {
//                filterSelect.addClass('fixed-filter');  
//            } else if ( $(window).scrollTop() - 5 <= filterSelect.position().top && filterSelect.hasClass('fixed-filter') ) {
//                filterSelect.removeClass('fixed-filter');
//            }
//        }
//    
//        $(window).on('scroll', function () {
//            setFilterMenu();
//        });
//    }
});
