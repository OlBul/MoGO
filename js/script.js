$(document).ready(function(){
  $('.header__slider').slick({
    dots: true,
    slidesToShow: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
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
  $('.header__slider>.slick-arrow[aria-label=Previous]').removeClass('slick-prev').addClass('_icon-left');
  $('.header__slider>.slick-arrow[aria-label=Next]').removeClass('slick-next').addClass('_icon-right');  
  $('.slick-arrow').text('');
  });

$(document).ready(function(){
  $('.project__link').click(function(event){
    $('.project__link').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function(){
  $('.video__play, .video__item').click(function(){
    $('.video__item').get(0).play();     
  })
})


$(document).ready(function(){
  $('.video__play, .video__item, ._icon-play,  video').click(function(){
    $('.video__play').css('display', 'none');
  })
  $('.video__item').click(function(){
    $('.video__play').css('display', 'flex');
  })
})






$(document).ready(function () {
    $('.posts__column').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 500,
        waitForAnimate: false,
        centerMode:false,
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
              centerMode:true,              
            }
          
          },
        ]
    });
    $('.posts__column>.slick-arrow[aria-label=Previous]').removeClass('slick-prev').addClass('_icon-left-min');
  $('.posts__column>.slick-arrow[aria-label=Next]').removeClass('slick-next').addClass('_icon-right-min');  
  $('button.slick-arrow').text('');
    
})


//===== Burger Menu ===========

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__nav").toggleClass('active');
    $('body').toggleClass('lock');
  });
});


