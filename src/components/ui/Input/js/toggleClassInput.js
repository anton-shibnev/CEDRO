export const toggleClassInput = (input, el) => {
  if (input.value.length > 0) {
    el.classList.add('input__eye--active');
  } else {
    el.classList.remove('input__eye--active');
  }
};
