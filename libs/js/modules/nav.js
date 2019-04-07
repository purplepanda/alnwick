function closeAllMenus() {
    $('#menuLink').delay(500).removeClass('open');
    $('.nav__list').delay(500).removeClass('show-nav');
    $('.subnav__list').delay(500).removeClass('show-subnav');
    $('body').removeClass('modal-open');
}

$('#menuLink').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('.nav__list').toggleClass('show-nav');
    $(this).toggleClass('open');
    $('body').toggleClass('modal-open');
});

$('#navbarSubmenuLink').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('.subnav__list').toggleClass('show-subnav');
});

$('.nav__list-link:not(.subnav)', '.subnav__list-link').on('click', function(e) {
    closeAllMenus();
});

$('body').on('keydown', function(e) {
    if (e.keyCode == 27) {
        closeAllMenus();
    }
});

$(window).on('resize', function () {
    closeAllMenus();  
});

$('.nav a').on('click', function(e) {
    var link = $(this).prop('href'),
        hashIndex = link.indexOf('#');
    
    if (hashIndex !== -1 && link.substr(0, hashIndex) === window.location.href.substr(0, hashIndex)) {
        e.preventDefault();
        
        var topOfElem = $(link.substr(hashIndex)).offset().top;
        
        $('html, body').animate({scrollTop: topOfElem - 16}, 750);
        closeAllMenus();
    }
});