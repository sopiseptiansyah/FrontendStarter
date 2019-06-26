require('./bootstrap');
require('owl.carousel');
require('wowjs');
require('magnific-popup');

$(document).ready(function () {
    

    $('.nav-bars').click(function(){
        $('.sidebar').toggleClass('active');
    
    });
    if ($(window).scrollTop()>=$('#home').position().top && $(window).scrollTop()<$('#aboutus').position().top) {
        $('.sidebar .link a').removeClass('active');
        $('.sidebar .link a[href="#home"]').addClass('active');
    }else if($(window).scrollTop()>=$('#aboutus').position().top && $(window).scrollTop()<$('#services').position().top){
        $('.sidebar .link a').removeClass('active');
        $('.sidebar .link a[href="#aboutus"]').addClass('active');
    }else if($(window).scrollTop()>=$('#services').position().top && $(window).scrollTop()<$('#ourwork').position().top){
        $('.sidebar .link a').removeClass('active');
        $('.sidebar .link a[href="#services"]').addClass('active');
    }else if($(window).scrollTop()>=$('#ourwork').position().top && $(window).scrollTop()<$('#contact').position().top){
        $('.sidebar .link a').removeClass('active');
        $('.sidebar .link a[href="#ourwork"]').addClass('active');
    }else if($(window).scrollTop()>=$('#contact').position().top){
        // console.log('asd');
        $('.sidebar .link a').removeClass('active');
        $('.sidebar .link a[href="#contact"]').addClass('active');
    }
    $(window).scroll(function(){
        if ($(this).scrollTop()>=$('#home').position().top && $(this).scrollTop()<$('#aboutus').position().top) {
            $('.sidebar .link a').removeClass('active');
            $('.sidebar .link a[href="#home"]').addClass('active');
        }else if($(this).scrollTop()>=$('#aboutus').position().top && $(this).scrollTop()<$('#services').position().top){
            $('.sidebar .link a').removeClass('active');
            $('.sidebar .link a[href="#aboutus"]').addClass('active');
        }else if($(this).scrollTop()>=$('#services').position().top && $(this).scrollTop()<$('#ourwork').position().top){
            $('.sidebar .link a').removeClass('active');
            $('.sidebar .link a[href="#services"]').addClass('active');
        }else if($(this).scrollTop()>=$('#ourwork').position().top && $(this).scrollTop()<$('#contact').position().top){
            $('.sidebar .link a').removeClass('active');
            $('.sidebar .link a[href="#ourwork"]').addClass('active');
        }else if($(this).scrollTop()>=$('#contact').position().top){
            // console.log('asd');
            $('.sidebar .link a').removeClass('active');
            $('.sidebar .link a[href="#contact"]').addClass('active');
        }
    });
    $('.sidebar .link a').click(function(){
        $('.sidebar .link a').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({
            scrollTop:parseInt($($(this).attr('href')).position().top+80)
        },1000,"swing");
        // alert($($(this).attr('href')).position().top);
        // alert($($(this).attr('href')).position().top);
        // alert('asdasd');
    });


    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
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


