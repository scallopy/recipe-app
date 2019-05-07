import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe', 
      'This is a simple Recipe', 
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
     new Recipe(
      'New Test Recipe', 
      'This is a simple Recipe', 
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
