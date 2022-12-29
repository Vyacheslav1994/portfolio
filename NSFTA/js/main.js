jQuery( document ).ready(function( $ ) {
// мобилнное меню
  
$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});
// мобилное меню


// слайдерн
$('.slick-one').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows : true,
  prevArrow: '<img class="slider-arrow slider-arrow__left" src="./img/arrov.png">',
  nextArrow: '<img class="slider-arrow slider-arrow__right" src="./img/arrov.png">'
  });
// слайдерн

// слайдерн

$('.slick-two').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows : true,
  prevArrow: '<img class="slider-arrow slider-arrow__left" src="./img/arrov.png">',
  nextArrow: '<img class="slider-arrow slider-arrow__right" src="./img/arrov.png">'
  });

// слайдерн

 
//  привязка по скролу 
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('active');
    }
  });
}

let options = {
  threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.scroll-item');

for (let elm of elements) {
  observer.observe(elm);
}
//  привязка по скролу 

// класс при hover

$(".index-box-two__li").hover(
  function() {
    $('.index-box-two__li').removeClass('active')
    $(this).addClass('active');
  }
);

$(".index-box-four__box").hover(
  function() {
    $('.index-box-four__box').removeClass('hover')
    $(this).addClass('hover');
  }
);

// класс при hovere

$(window).scroll(function() {
  var height = $(window).scrollTop();
  
       /*Если сделали скролл на 100px задаём новый класс для header*/
  if(height > 100){
  $('.header').addClass('header-fixed');
  } else{
       /*Если меньше 100px удаляем класс для header*/
  $('.header').removeClass('header-fixed');
  }
  
  });



// добавить класс при клике 
$(".fanki__box").click(function(){
  $(".fanki__box").toggleClass("open");
});
// добавить класс при клике 
  


$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
  $("html, body").animate({ scrollTop: "0px"},500)
    console.log(11)
    return false;
});

// анимация 

  AOS.init();

// анимация 


});
