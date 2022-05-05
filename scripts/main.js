import recipes from './data/recipes.js'
import RecipeList from "./recipe.js"
import AppliancesList from "./appliance.js"
import UstensilList from "./ustensils.js"
import IngredientList from "./ingredient.js"
import TagList from "./tags.js"

class Page {
  constructor() {
    this.tagList = new TagList(this.refresh)
    this.recipeList = new RecipeList()
    this.ustensilSelector = new Selector(this.addTag)
  }
  
  refresh() {
    // Récupérer les filtres (tags + searchBar)
    // this.recipeList.sort(tags, text)
    // this.ustensilSelector.loadRecipes(this.recipeList)
  }
  
  addTag(tag) {
    this.tagList.addTag(tag)
    this.refresh()
  }
}