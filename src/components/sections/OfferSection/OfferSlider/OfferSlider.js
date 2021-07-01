import Swiper from 'swiper';

(() => {
  new Swiper('#offerSlider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      1280: {
        spaceBetween: 32,
        slidesPerView: 4,
      },
    },
  });
})();
