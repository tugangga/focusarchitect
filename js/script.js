// $('.page-scroll').on('click', function(e){
//     //ambil isi href
//     var tujuan = $(this).attr('href');
//     //tangkap emen ybs
//     var elemenTujuan = $(tujuan);

//     //pindah scroll
//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top - 50
//     }, 1250, 'easeInOutExpo');

//     e.preventDefault();

// });

$(window).on('load', function() {
    $('.fx-1-left').addClass('fx1show');
    $('.fx-1-right').addClass('fx1show');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    //console.log(wScroll);

    //CSS animation-fx-1
    $('.animation-fx-1 .fx-1').css ({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });


    $('.fx-1').css ({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    // if (wScroll > 1000 ) {
    //     console.log('oke');
    // }

    //CSS animation-fx-2 IMAGE SHOW
    if (wScroll > $('.animation-fx-2').offset().top - 800 ) {
        $('.animation-fx-2 .fx-2').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-2 .fx-2').eq(kotak).addClass('fx2show')
            }, 250 * (kotak + 1));
        });

        // tanpa efek muncul satu-satu
        //$('.global-img-effect .img-effect').addClass('show')
    };

    //CSS animation-fx-3
    if (wScroll > $('.animation-fx-3').offset().top - 400 ) {
        $('.animation-fx-3').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-3 .fx-2-left').addClass('fx3show')
                $('.animation-fx-3 .fx-2-right').addClass('fx3show')
            });
        });

    };

    //CSS animation-fx-4
    if (wScroll > $('.animation-fx-4').offset().top - 600 ) {
        $('.animation-fx-4').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-4 .fx-3-left').addClass('fx4show')
                $('.animation-fx-4 .fx-3-right').addClass('fx4show')
            });
        });

    };

    //CSS animation-fx-5
    if (wScroll > $('.animation-fx-5').offset().top - 400 ) {
        $('.animation-fx-5').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-5 .fx-4-left').addClass('fx5show')
                $('.animation-fx-5 .fx-4-right').addClass('fx5show')
            });
        });

    };

    //CSS animation-fx-6
    if (wScroll > $('.animation-fx-6').offset().top - 500 ) {
        $('.animation-fx-6').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-6 .fx-5-left').addClass('fx6show')
                $('.animation-fx-6 .fx-5-right').addClass('fx6show')
            });
        });

    };

    //CSS animation-fx-7
    if (wScroll > $('.animation-fx-7').offset().top - 500 ) {
        $('.animation-fx-7').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-7 .fx-6-left').addClass('fx7show')
                $('.animation-fx-7 .fx-6-right').addClass('fx7show')
            });
        });

    };

    //CSS animation-fx-8 IMAGE SHOW
    if (wScroll > $('.animation-fx-8').offset().top - 800 ) {
        $('.animation-fx-8 .fx-3').each(function(kotak) {
            setTimeout(function() {
            //     $('.animation-fx-8 .fx-3').eq(kotak).addClass('fx8show')
            // }, 250 * (kotak + 1));
                $('.animation-fx-8 .fx-3').eq(kotak).addClass('fx8show')
            }, 300 * (kotak + 1));
        });

        // tanpa efek muncul satu-satu
        //$('.global-img-effect .img-effect').addClass('show')
    };

    //CSS animation-fx-9
    if (wScroll > $('.animation-fx-9').offset().top - 500 ) {
        $('.animation-fx-9').each(function(kotak) {
            setTimeout(function() {
                $('.animation-fx-9 .fx-7-left').addClass('fx9show')
                $('.animation-fx-9 .fx-7-right').addClass('fx9show')
            });
        });

    };

    //CSS animation-fx-10 JASA KAMI SHOW
    if (wScroll > $('.animation-fx-10').offset().top - 700 ) {
        $('.animation-fx-10').each(function(kotak) {
            setTimeout(function() {
            //     $('.animation-fx-10 .fx-3').eq(kotak).addClass('fx8show')
            // }, 250 * (kotak + 1));
                $('.animation-fx-10 .fxl-4').eq(kotak).addClass('fx10show')
                $('.animation-fx-10 .fxt-4').eq(kotak).addClass('fx10show')
                $('.animation-fx-10 .fxb-4').eq(kotak).addClass('fx10show')
                $('.animation-fx-10 .fxr-4').eq(kotak).addClass('fx10show')
            }, 500);
        });

        // tanpa efek muncul satu-satu
        //$('.global-img-effect .img-effect').addClass('show')
    };
});