import recipes from './data/recipes.js'
import RecipeList from "./recipeList.js"
import ApplianceSelector from "./appliance.js"
import UstensilSelector from "./ustensils.js"
import IngredientSelector from "./ingredient.js"
import TagList from "./selectTags.js"
import Selector from './selector.js'

class Page {
  constructor() {
    this.recipes = recipes
    this.tagList = new TagList(this.onRemoveTag.bind(this))
    this.recipeList = new RecipeList()
    this.ustensilSelector = new UstensilSelector(recipes, 'Ustensil')
    this.applianceSelector = new ApplianceSelector(recipes, 'Appliance')
    this.ingredientSelector = new IngredientSelector(recipes, 'Ingredient')
    this.selector = new Selector(this.onAddTag.bind(this), this.ustensilSelector)
    const searchBarForm = document.getElementById('form1')
    searchBarForm.addEventListener('input', this.onSearchBar.bind(this))
    this.selector.selectorDOM()
    this.tagList.displayTagsDOM()
    this.refresh()
  }
  
  refresh() {
    const recipeListfilter = this.recipeList.filtering(this.tagList.tags, this.searchBarValue)
  }
  
  onSearchBar(e){
    this.searchBarValue = e.target.value
    
    clearTimeout(this.timeOutId)
    this.timeOutId = setTimeout(this.refresh.bind(this), 300)
  }
  
  onRemoveTag(tag){
    this.tagList.removeTag(tag)
    this.refresh()
  }

  onAddTag(tag) {
    if (!this.tagList.tags.some(t => t.label === tag.label)){
      this.tagList.addTag(tag)
      this.refresh()
    }
  }
}

const mainPage = new Page 
