const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngridients = ingredients.map(ingredient => {
  const li = document.createElement('li');

  li.textContent = ingredient;
  li.classList.add('item');
  return li;
})

const list = document.querySelector('#ingredients');
list.append(...listIngridients);