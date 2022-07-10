$(document).ready(function(){
    //scroll button

    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding','lock');
        }, 200);
    }

    $(".owl-carousel").owlCarousel(
        {
            items: 1,
            nav: true,
            dots: true,
            mouseDrag: true,
            navText: ["",""],
        }
    );

    //properties buttons

    $('.section-properties__btn').click(function (event) {
        $('.section-properties__btn').removeClass('active');
        setTimeout(() => {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parent().find('.section-properties__photo');
            } else {
                $(this).addClass('active');
                $(this).parent().find('.section-properties__photo');
            }
        });
    });

    $('.section-catalog-item__btn').click(function (event){
        $('.main-popup').addClass('target');
        $('body').addClass('lock');
    });

    $('.main-popup__bg').click(function (event){
        $('.main-popup').removeClass('target');
        $('body').removeClass('lock');
    });

    $('.main-popup__close').click(function (event){
        $('.main-popup').removeClass('target');
        $('body').removeClass('lock');
    });

    $('.footer__btn').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.footer__btn').fadeIn();
        } else {
            $('.footer__btn').fadeOut();
        }
    });
});