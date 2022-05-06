import recipes from './data/recipes.js'
import RecipeList from "./recipeList.js"
import AppliancesList from "./appliance.js"
import UstensilList from "./ustensils.js"
import IngredientList from "./ingredient.js"
import TagList from "./selectTags.js"
import Selector from './selector.js'

class Page {
  constructor() {
    this.tagList = new TagList(this.refresh)
    this.recipeList = new RecipeList()
    console.log(this.recipeList)
    this.ustensilSelector = new Selector(this.addTag)
  }
  
  refresh() {
    // Récupérer les filtres (tags + searchBar)
    const tagsAppliances = ['Blender','Saladier']
    const tagsUstensil = ['fouet','moule à gateaux', 'casserolle']
    const searchBar = 'coco'
    const recipeListfilter = this.recipeList.filtering(tagsAppliances, tagsUstensil, searchBar)

    // this.ustensilSelector.loadRecipes(this.recipeList)
  }
  
  addTag(tag) {
    this.tagList.addTag(tag)
    this.refresh()
  }
}