export interface Recipes {
  id: string;
  imageUrl: string;
  title: string;
  ingredients: string[];
}

export const recipeList: Recipes[] = [
  {
    id: 'rk1',
    imageUrl: 'assets/recipe-img/chowmein.jpg',
    title: 'Egg Chowmein',
    ingredients: ['Egg', 'Chowmein'],
  },
  {
    id: 'rk2',
    imageUrl: 'assets/recipe-img/chilli-chicken.png',
    title: 'Chilli Chicken',
    ingredients: ['Chicken', 'Egg', 'Flour'],
  },
  {
    id: 'rk3',
    imageUrl: 'assets/recipe-img/fried-rice.jpg',
    title: 'Fried Rice',
    ingredients: ['Rice', 'Butter'],
  },
];
