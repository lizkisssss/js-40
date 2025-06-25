document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const scrollStep = 320;

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      gallery.scrollBy({
        left: scrollStep,
        behavior: 'smooth',
      });
    } else if (event.key === 'ArrowLeft') {
      gallery.scrollBy({
        left: -scrollStep,
        behavior: 'smooth',
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-action="render"]');
  const destroyBtn = controls.querySelector('[data-action="destroy"]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount > 0 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; 
    } else {
      alert('Будь ласка, введіть число від 1 до 100.');
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '10px';
      box.style.marginRight = '10px'; 
      box.style.display = 'inline-block'; 

      fragment.appendChild(box);
      size += 10;
    }
    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
});