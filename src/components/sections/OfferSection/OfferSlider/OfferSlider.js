import Swiper from 'swiper';

(() => {
  new Swiper('#offerSlider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      1920: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
    },
  });
})();
