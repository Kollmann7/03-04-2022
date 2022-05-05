import recipes from './data/recipes.js';

export class Ingredient {
  constructor(recipe) {
    this.recipeId = recipe.id
    this.name = recipe.name
    this.ingredients = recipe.ingredients
  }
    
  containsIngredient(ingredient) {
    return this.ingredients.some(ingredientItem => ingredientItem.ingredient === ingredient)
  }
  
  ingredientIncludesText(text) {
    return this.ingredients.some(ingredientItem => ingredientItem.ingredient.includes(text))
  }
}

export default class IngredientList {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Ingredient(recipe))
    this.displayedIngredient = this.recipes
  }
  
  filterByIngredient(ingredient) {
    this.displayedIngredient = this.recipes.filter(recipe => recipe.containsIngredient(ingredient))
  }
  
  filterByIngredientText(text) {
    this.displayedIngredient = this.recipes.filter(recipe => recipe.ingredientIncludesText(text))
  }
}

const ingredientList = new IngredientList(recipes)


ingredientList.filterByIngredient('Beurre')
console.log(ingredientList)

ingredientList.filterByIngredientText('Beu')
console.log(ingredientList)
