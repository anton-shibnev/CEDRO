(() => {
  const $modal = document.querySelector('#modal');
  const $burger = document.querySelector('#burger');
  const $header = document.querySelector('#header');
  const $app = document.querySelector('#app');

  if (!$modal || !$burger || !$header) return;

  $burger.addEventListener('click', () => {
    $burger.classList.toggle('burger--active');
    $modal.classList.toggle('modal--active');
    $header.classList.toggle('header--active');
    $app.classList.toggle('app--no-scroll');
  });
})();
