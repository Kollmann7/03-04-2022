import recipes from './data/recipes.js'
import RecipeList from "./recipeList.js"
import AppliancesList from "./appliance.js"
import UstensilList from "./ustensils.js"
import IngredientList from "./ingredient.js"
import TagList from "./selectTags.js"
import Selector from './selector.js'

class Page {
  constructor() {
    this.tagList = new TagList(this.onRemoveTag)
    this.recipeList = new RecipeList()
    this.ustensilSelector = new Selector(this.addTag)
  }
  
  refresh() {
    // Récupérer les filtres (tags + searchBar)

    const searchBarForm = document.getElementById('form1')
    searchBarForm.addEventListener('input', this.recipeList.filtering)
    console.log(this.recipeList.filtering)

    // const recipeListfilter = this.recipeList.filtering(tagsAppliances, tagsUstensil, tagsIngredient)

    // const ustensilSelector = this.ustensilSelector.loadRecipes(this.recipeList)
    
  }
  onRemoveTag(){
    this.refresh()
  }
  addTag(tag) {
    this.tagList.addTag(tag)
    this.refresh()
  }
}

const mainPage = new Page 
mainPage.refresh()