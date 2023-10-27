$(function(){
    $('header').mouseenter(function(){
        $('body').addClass('active');
    }).mouseleave(function(){
        $('body').removeClass('active');
    });

    $('.menu-wrap').mouseenter(function(){
        $('header .top-bg').addClass('open');
    }).mouseleave(function(){
        $('header .top-bg').removeClass('open');
    });

    $('.menu.num1').mouseenter(function(){
        $('.map .menu.num1 .sub-menu.drop').addClass('open');
    }).mouseleave(function(){
        $('.map .menu.num1 .sub-menu.drop').removeClass('open');
    });
    $('.menu.num2').mouseenter(function(){
        $('.map .menu.num2 .sub-menu.drop').addClass('open');
    }).mouseleave(function(){
        $('.map .menu.num2 .sub-menu.drop').removeClass('open');
    });
});


