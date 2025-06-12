const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`y списку ${categoriesItems.length} категорії.`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElementsCount = item.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElementsCount}`);
});

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);

const galleryList1 = document.querySelector('#gallery');
const galleryItemsMarkup = images
  .map(
    ({ url, alt }) => `
  <li>
    <img src="${url}" alt="${alt}">
  </li>
`
  )
  .join('');

galleryList.classList.add('gallery');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery');
galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);
