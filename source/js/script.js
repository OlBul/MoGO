// ========== Slider Header=====================================================================
$(document).ready(function () {
  $('.header__slider').slick({
    dots: true,
    slidesToShow: 1,    
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',  
    fade: true, 
    infinite:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          infinite: true,
          dots: false,
        }
      }, 
    
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          infinite: true,
          dots: false,          
        }
      },
    ]  
    
  }) 
});


// ========== Slider=====================================================================

$(document).ready(function () {
  $('.posts__column').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 500,
    waitForAnimate: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
        }
          
      },
    ]
  });
  $('.posts__column>.slick-arrow[aria-label=Previous]').removeClass('slick-prev').addClass('_icon-left-min');
  $('.posts__column>.slick-arrow[aria-label=Next]').removeClass('slick-next').addClass('_icon-right-min');
  $('button.slick-arrow').text('');
    
});



$(document).ready(function () {

    // ====== Burger menu ===================================================
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__nav").toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.list-header__link a').click(function () {
      $('.header__burger, .header__nav').removeClass('active');
      $('body').removeClass('lock');
    })

    // ======= Arrow Up =======================================================
    let heightHeader = $('.header').innerHeight();
    let scrollOffset = 0;
    let arrowUp = $('.arrow__up'); 

    $(window).scroll(function () {

      scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);
      
    });
  
    function checkScroll() {
        if (scrollOffset >= heightHeader) {
            arrowUp.removeClass('arrow__up_hiden');
        } else {
            arrowUp.addClass('arrow__up_hiden');
        }
    }

    // ========= Scroll =========================================================
    $('[data-goto').click(function (event) {
        event.preventDefault()

        let elementClick = $(this).data('goto');
        let elementOffset = $(elementClick).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        }, 500);
    });

    // ======= Project link =================================================
    let listHeaderLink = $('.list-header__link a');
    let projectLink = $('.project__link');

    $(projectLink).click(function (event) {
        $(projectLink).removeClass('active');
        $(this).addClass('active');
    });

    $(listHeaderLink).click(function (event) {
        $(listHeaderLink).removeClass('_active');
        $(this).addClass('_active');
    });
  

    // ======== Video =======================================================
    $('.video__play, .video__item').click(function () {
        $('.video__item').get(0).play();
    })
    $('.video__play, .video__item, ._icon-play,  video').click(function () {
        $('.video__play').css('display', 'none');
    })
    $('.video__item').click(function () {
        $('.video__play').css('display', 'flex');
    });
  
});



