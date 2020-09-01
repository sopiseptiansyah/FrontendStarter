require('./bootstrap');
require('intersection-observer');
var LazyLoad = require('vanilla-lazyload');
require('slick-carousel/slick/slick');
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


  // Slick 
  $('.product-other__carousel').on('init', function () {

    console.log($("slick-slider").find('product-carousel__card'))

  }).slick({
    accessibility: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '14%',
    prevArrow: "<div class='slick-navigation arrow-prev'><img class='no-async' src='../img/icon-arrow-left.svg'/></div>",
    nextArrow: "<div class='slick-navigation arrow-next'><img class='no-async' src='../img/icon-arrow-right.svg'/></div>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10%',
          arrows: false
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


  // accordion
  $('.accordion__body__parent').on('show.bs.collapse', function () {
    $(this).parent().find('h5').addClass('accordionIsOpen');

  });
  $('.accordion__body__parent').on('hide.bs.collapse', function () {
    $(this).parent().find('h5').removeClass('accordionIsOpen');
  });


  // nav
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navigation-dekstop");
      $nav.toggleClass('opacity-0', $(this).scrollTop() > $nav.height());
      $nav.toggleClass('scrolled', $(this).scrollTop() > $('#hero').height());
    });
  });


  var lastScrollTop1 = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    var banner = $('.navigation-dekstop');
    setTimeout(function () {
      if (st > lastScrollTop1) {
        banner.addClass('opacity-0');
      } else {
        banner.removeClass('opacity-0');
      }
      lastScrollTop1 = st;
    }, 100);
  });

  // nav mobile
  // chechbox nav
  const checkbox = document.getElementById('open');
  const link1 = document.getElementById('link1');
  const link2 = document.getElementById('link2');
  const link3 = document.getElementById('link3');
  const link4 = document.getElementById('link4');
  const link5 = document.getElementById('link5');

  function toggleNavbarMobile() {
    // alert('you clicked the secondary button');
    checkbox.click();
  }

  link1.addEventListener("click", toggleNavbarMobile, false);
  link2.addEventListener("click", toggleNavbarMobile, false);
  link3.addEventListener("click", toggleNavbarMobile, false);
  link4.addEventListener("click", toggleNavbarMobile, false);
  link5.addEventListener("click", toggleNavbarMobile, false);


});
