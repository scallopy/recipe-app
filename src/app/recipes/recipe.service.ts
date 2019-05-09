import { EventEmitter, Output } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Testy Schnitzel', 
      'A super-testy Schnitzel - just awesome!', 
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
     new Recipe(
      'Big Fet Burger', 
      'What else you need to say?', 
       'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
       [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
       ]
     )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
