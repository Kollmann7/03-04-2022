import recipes from './data/recipes.js';

export default class Recipe {
  constructor(recipe) {

    this.id = recipe.id
    this.name = recipe.name
    this.ingredients = recipe.ingredients
    this.appliance = recipe.appliance
    this.ustensils = recipe.ustensils
  }
  
  containsIngredient(ingredient) {
    return this.ingredients.some(ingredientItem => ingredientItem.ingredient === ingredient)
  }
  
  ingredientIncludesText(text) {
    return this.ingredients.some(ingredientItem => ingredientItem.ingredient.includes(text))
  }
}
