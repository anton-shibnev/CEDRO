import { toggleTypeInput } from './js/toggleTypeInput';
import { toggleClassInput } from './js/toggleClassInput';

const inputEvents = () => {
  const $wrapInputs = [...document.querySelectorAll('.input')];

  if ($wrapInputs.length === 0) return;

  $wrapInputs.forEach(($wrapInput) => {
    const $input = $wrapInput.querySelector('.input__input');
    const $eye = $wrapInput.querySelector('.input__eye');

    if (!$eye) return;

    toggleClassInput($input, $eye);
    toggleTypeInput($eye, $input);

    $input.addEventListener('input', () => {
      toggleClassInput($input, $eye);
      // toggleTypeInput($eye, $input);
    });
  });
};

inputEvents();
