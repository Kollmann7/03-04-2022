import recipes from './data/recipes.js'
import RecipeList from "./recipeList.js"
import ApplianceSelector from "./appliance.js"
import UstensilSelector from "./ustensils.js"
import IngredientSelector from "./ingredient.js"
import TagList from "./selectTags.js"
import { APPLIANCES, INGREDIENTS, USTENSILS, INGREDIENTSINFRENCH, APPLIANCESINFRENCH, USTENSILSINFRENCH } from './constants.js';


class Page {
  constructor() {
    this.recipes = recipes
    this.tagList = new TagList(this.onRemoveTag.bind(this))
    this.recipeList = new RecipeList()
    this.ingredientSelector = new IngredientSelector(recipes, INGREDIENTS, this.onAddTag.bind(this),INGREDIENTSINFRENCH)
    this.applianceSelector = new ApplianceSelector(recipes, APPLIANCES, this.onAddTag.bind(this), APPLIANCESINFRENCH)
    this.ustensilSelector = new UstensilSelector(recipes, USTENSILS, this.onAddTag.bind(this),USTENSILSINFRENCH)
    const searchBarForm = document.getElementById('form1')
    searchBarForm.addEventListener('input', this.onSearchBar.bind(this))
    this.tagList.displayTagsDOM()
    this.refresh()
  }
  
  refresh() {
    const recipeListfilter = this.recipeList.filtering(this.tagList.tags, this.searchBarValue)
    this.updsateSelector(recipeListfilter)
    console.log(recipeListfilter)
  }
  
  updsateSelector(recipes){
    this.ingredientSelector.loadRecipes(recipes)
    this.ustensilSelector.loadRecipes(recipes)
    this.applianceSelector.loadRecipes(recipes)

  }
  onSearchBar(e){
    this.searchBarValue = e.target.value
       
    if(this.searchBarValue.length >= 3){
      clearTimeout(this.timeOutId)
      this.timeOutId = setTimeout(this.refresh.bind(this), 300)
    }
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
