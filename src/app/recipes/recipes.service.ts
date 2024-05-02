import { Injectable } from '@angular/core';
import { recipeList, Recipes } from './recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeList: Recipes[] = recipeList;

  constructor() {}

  getAllRecipeList(): Recipes[] {
    console.log(this.recipeList);
    return this.recipeList;
  }

  getRecipe(recipeId: string): Recipes {
    return this.recipeList.find((recipe) => recipe.id === recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipeList = this.recipeList.filter(
      (recipe) => recipe.id !== recipeId
    );
  }
}
