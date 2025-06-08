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
