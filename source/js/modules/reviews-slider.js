import Swiper from '../vendor/swiper';

const reviewsSlider = new Swiper(('.reviews-slider'), {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },
});


export {reviewsSlider};
