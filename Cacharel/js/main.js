jQuery( document ).ready(function( $ ) {
// мобилнное меню
  

	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});

// мобилное меню

// добавить класс при клике 


$(".colour-link").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".colour-link").removeClass('active');
  }
  else {
   $(".colour-link").removeClass('active');
   $(this).addClass('active');
  }
 });

 $(".size-link").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".size-link").removeClass('active');
  }
  else {
   $(".size-link").removeClass('active');
   $(this).addClass('active');
  }
 });





 $(".akar-icons").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".akar-icons").removeClass('active');
  }
  else {
   $(".akar-icons").removeClass('active');
   $(this).addClass('active');
  }
 });

 $(".btn--delivery").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".btn--delivery").removeClass('active');
  }
  else {
   $(".btn--delivery").removeClass('active');
   $(this).addClass('active');
  }
 });

 $(".search").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".search").removeClass('active');
  }
  else {
   $(".search").removeClass('active');
   $(this).addClass('active');
  }
 });

 $(".frequent-questions__title ").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".frequent-questions__title").removeClass('active');
  }
  else {
   $(".frequent-questions__title").removeClass('active');
   $(this).addClass('active');
  }
 });

 $(".frequent-questions__box1").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".frequent-questions__box1").removeClass('active');
  }
  else {
   $(".frequent-questions__box1").removeClass('active');
   $(this).addClass('active');
  }
 });

 $(".form-map__wraper-text ").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".form-map__wraper-text").removeClass('active');
  }
  else {
   $(".form-map__wraper-text").removeClass('active');
   $(this).addClass('active');
  }
 });

 






  
$(".close-t").click(function() {
  $(".akar-icons").removeClass("active");    
});

$(".close").click(function() {
  $(".hover__content-linc").removeClass("hover");    
});



// добавить класс при клике 
// слайдерн
$('.slick-box-tr').slick({
  dots: true,
  arrows: true,
  prevArrow: '<div class="left-arrow"></div>',
  nextArrow: '<div class="right-arrow"></div>',
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false
});
  $('.slick-box').slick({
    dots: true,
    arrows: true,
    prevArrow: '<div class="left-arrow"></div>',
    nextArrow: '<div class="right-arrow"></div>',
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.2,
        }
      }
    ]
});
$('.slick-blog').slick({
  dots: true,
  arrows: false,
  prevArrow: '<div class="left-arrow"></div>',
  nextArrow: '<div class="right-arrow"></div>',
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
      }
    }
  ]
});
$('.slick-baner').slick({
  dots: true,
  arrows: false,
  prevArrow: '<div class="left-arrow"></div>',
  nextArrow: '<div class="right-arrow"></div>',
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
// $('.slick-baner-pop').slick({
//   dots: true,
//   arrows: true,
//   prevArrow: '<div class="left-arrow"></div>',
//   nextArrow: '<div class="right-arrow"></div>',
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });

$(document).ready(function () {
  $('.slick-baner-pop').owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    dotsEach: true,
  });
});

// слайдерн

// класс при ховере 
$( ".hover__content-box" )
.mouseover(function() {
  jQuery(this).find('.hover__content-linc').addClass('hover');
})
.mouseout(function() {
  jQuery(this).find('.hover__content-linc').removeClass('hover');
});

$( ".img-tovar-box" )
.mouseover(function() {
  jQuery(this).find('.img-tovar').addClass('hover');
})
.mouseout(function() {
  jQuery(this).find('.img-tovar').removeClass('hover');
});
$( ".pt li" )
.mouseover(function() {
  jQuery(this).find('.menu__item').addClass('active');
})
.mouseout(function() {
  jQuery(this).find('.menu__item').removeClass('active');
});



// класс при ховере 

$(".menu__item").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
   $(".menu__item").removeClass('active');
  }
  else {
   $(".menu__item").removeClass('active');
   $(this).addClass('active');
  }
 });
// класс при ховере 
//  фанки бокс 

  $('#btn-ft').click(function(){
    $.fancybox.open({
      src: '#hidden',
      type: 'inline'
    });
  });
  $('#btn-ftr').click(function(){
    $.fancybox.open({
      src: '#hidden',
      type: 'inline'
    });
  });
  
//  фанки бокс 

//  привязка по скролу 

$(window).scroll(function() {
  var height = $(window).scrollTop();
  
       /*Если сделали скролл на 100px задаём новый класс для header*/
  if(height > 100){
  $('.header__container-top').addClass('mene-hover-box-sk');
  } else{
       /*Если меньше 100px удаляем класс для header*/
  $('.header__container-top').removeClass('mene-hover-box-sk');
  }
  
  });
//  привязка по скролу 
 // попап
//  var delay_popup = 0000;
//     setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
 // попап
//  $("body").click(function(e) {
// 	if($(e.target).closest(".popup").length==0) $(".overlay").css("display","none");
// });
jQuery(function($){
  $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
      var block = $("#block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
      if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
          && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
          block.hide(); // если условия выполняются - скрываем наш элемент
      }
  });
});


// $.fancybox.open({type: 'iframe', href: '#overlay'})
$.fancybox.open({type: 'inline', src: '#overlay'})


});
