import recipes from './data/recipes.js'

export default class Recipe {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.time = recipe.time
    this.description = recipe.description
    this.ingredients = recipe.ingredients
    this.appliance = recipe.appliance
    this.ustensils = recipe.ustensils
  }
  
  containsIngredient(ingredient) {
    return this.ingredients.some(ingredientItem => ingredientItem.ingredient === ingredient)
  }
  containsUstensil(ustensil){
    return this.ustensils.includes(ustensil)
  }
  nameIncludeText(text){
    return this.name.toLowerCase().includes(text.toLowerCase())
  }
  descIncludeText(text){
    return this.description.toLowerCase().includes(text.toLowerCase())
  }
}
