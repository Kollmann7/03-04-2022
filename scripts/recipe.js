import recipes from './data/recipes.js';

export class Recipe {
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

export default class RecipeList {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))
    this.displayedRecipes = this.recipes
  }
  
  filterByIngredient(ingredient) {
    this.displayedRecipes = this.recipes.filter(recipe => recipe.containsIngredient(ingredient))
  }
  
  filterByIngredientText(text) {
    this.displayedRecipes = this.recipes.filter(recipe => recipe.ingredientIncludesText(text))
  }
}

const recipeList = new RecipeList(recipes)


