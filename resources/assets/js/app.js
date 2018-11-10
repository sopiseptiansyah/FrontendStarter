require('./bootstrap');
require('owl.carousel');
require('magnific-popup');

$(document).ready(function () {
    // Owl Carousel
    $('[data-carousel]').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Magnific Popup
    var popup = function (el, source) {
        $(el).magnificPopup({
            items: {
                src: source
            },
            type: "iframe",
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