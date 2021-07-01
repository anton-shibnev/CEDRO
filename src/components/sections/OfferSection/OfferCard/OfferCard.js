const toggleLike = () => {
  const $likeList = [...document.querySelectorAll('.offer-card__like')];
  if (!$likeList.length) return;

  $likeList.forEach(($like) => {
    $like.addEventListener('click', () => {
      $like.classList.toggle('offer-card__like--active');
    });
  });
};
toggleLike();
