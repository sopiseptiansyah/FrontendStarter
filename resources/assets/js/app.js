require('./bootstrap');
require('intersection-observer');
var LazyLoad = require('vanilla-lazyload');
require('slick-carousel');
require('magnific-popup');

$(document).ready(function () {

    // LazyLoad
    var lazyLoadInstance = new LazyLoad({
        elements_selector: "[data-src]"
        // ... more custom settings?
    });
    
    var lazyLoadInstancebg = new LazyLoad({
    elements_selector: "[data-bg]",
    // ... more custom settings?// Assign the callbacks defined above
    });

    if (lazyLoadInstance && lazyLoadInstancebg) {
        lazyLoadInstance.update();
        lazyLoadInstancebg.update();
    }
    // End Lazy Load


    // Slick with lazyload
    $('.slick--carousel').slick({
        dots: true,
        nav: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    //   End Slick


    // Magnific Popup
    var popup = function (el, source) {
        $(el).magnificPopup({
            items: {
                src: source
            },
            type: "iframe",
            mainClass: 'mfp-with-fade',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1&cc_load_policy=1&disablekb=1&color=white&rel=0"
                    }
                },
                srcAction: "iframe_src"
            }
        });
    }
    $('[data-popup]').each(function () {
        popup(this, $(this).attr('popup-src'))
    });
});


