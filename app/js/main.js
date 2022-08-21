$(function () {

 

let swiper = new Swiper('.slider', {
  slidesPerView:1,
  loop:true,
  slideClass:'slide',
  wrapperClass:'major-slider__wrapper',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
      delay: 4000,
    },
  
    
});

let swiperItem = new Swiper('.slider-item', {
  slidesPerView:1,
  loop:true,
  slideClass:'slide',
  wrapperClass:'item-slider__wrapper',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
});



let swiperSpecial = new Swiper('.special-slider', {
  slidesPerGroup:2,
  loop:true,
  
  slideClass:'slide',
  wrapperClass:'special-slider__wrapper',
    pagination: {
      el: '.special__swiper-pagination',
    },
   
    
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768:{
        slidesPerView:3,
      },
      1024:{
        slidesPerView:4,
      },

    },
    spaceBetween: 10,
    
    
});





let swiperReview = new Swiper('.review-foto__slider', {
  slidesPerView:4,
  slideClass:'slide',
  wrapperClass:'review-foto__wrapper',
  slidesPerGroup:2,
  loop:true,
  spaceBetween:20,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});






  $('.filters__btn').on('click', function(){
    $('.filters').toggleClass('filters--active');
  });

$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');
});

$('.apply__btn').on('click', function(){
  $('.filters').removeClass('filters--active');
  console.log()
});


  $(".js-range-slider").ionRangeSlider({
    type:"double",
    min:0,
    max:5000,
    from:1700,
    to:4500,
  });

  const ratingItemList = document.querySelectorAll('.rating__item');
  const ratingItemArray = Array.prototype.slice.call(ratingItemList);

  ratingItemArray.forEach(item =>
    item.addEventListener('click', () =>
      item.parentNode.dataset.totalValue = item.dataset.itemValue)
    );
 


  $(document).ready(function () {
    $('#goRight').on('click', function () {
      $('#slideBox').animate({
        'marginLeft': '0'
      });
      $('.topLayer').animate({
        'marginLeft': '100%'
      });
    });
    $('#goLeft').on('click', function () {
      $('#slideBox').animate({
        'marginLeft': '50%'
      });
      $('.topLayer').animate({
        'marginLeft': '0'
      });
    });
  });

  const accordions = document.querySelectorAll('.accordion__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const header = self.querySelector('.accordion__header');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  

  $('.tabs__top__item').on('click', function (e) {

    e.preventDefault();
    $('.tabs__top__item').removeClass('tabs__top__item--active');
    $(this).addClass('tabs__top__item--active');

    $('.tabs__content__item').removeClass('tabs__content__item--active');
    $($(this).attr('href')).addClass('tabs__content__item--active');
  });




  




  


});