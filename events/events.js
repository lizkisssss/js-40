 const colorForm = document.getElementById('color-form');

  colorForm.addEventListener('change', event => {
    if (event.target.name === 'color') {
      document.body.style.backgroundColor = event.target.value;
    }
  });
 const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', event => {
    nameOutput.textContent = event.target.value.trim() === '' ? 'незнайомець' : event.target.value;
  });
   const validationInput = document.getElementById('validation-input');

  validationInput.addEventListener('blur', event => {
    const requiredLength = Number(event.target.dataset.length);
    const currentLength = event.target.value.length;

    if (currentLength === requiredLength) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');
    } else {
      event.target.classList.remove('valid');
      event.target.classList.add('invalid');
    }
  });
  const fontSizeControl = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  fontSizeControl.addEventListener('input', event => {
    textSpan.style.fontSize = `${event.target.value}px`;
  });