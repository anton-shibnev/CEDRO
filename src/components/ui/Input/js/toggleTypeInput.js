export const toggleTypeInput = (eye, input) => {
  const $eyeOpen = eye.querySelector('.input__eye-icon--open');
  const $eyeClosed = eye.querySelector('.input__eye-icon--closed');
  if (!$eyeOpen || !$eyeClosed) return;

  $eyeOpen.classList.add('input__eye-icon--active');

  eye.addEventListener('click', (e) => {
    e.preventDefault();

    input.type = input.type === 'password' ? 'text' : 'password';
    $eyeOpen.classList.toggle('input__eye-icon--active');
    $eyeClosed.classList.toggle('input__eye-icon--active');
  });
};
