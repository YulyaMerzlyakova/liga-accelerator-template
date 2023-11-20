import Swiper from '../vendor/swiper';

const coachSlider = new Swiper(('.coach-slider'), {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 2,
    },
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

export {coachSlider};
