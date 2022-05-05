import recipes from './data/recipes.js'

class AbstractSelector {
    constructor(recipes, type, selectCallback) {
      this.loadRecipes(recipes)
      this.type = type
      this.selectCallback = selectCallback
    }
    
    loadRecipes(recipes) {
      throw new Error('loadRecipes should be implemented')
    }
    
    displaySelectableItems() {
      console.log(this.type, 'list :', this.itemsList)
    }
  }
  
  class ApplianceSelector extends AbstractSelector {
    constructor(recipes, type) {
      super(recipes, type)
    }
    
    loadRecipes(recipes) {
      this.itemsList = Array.from(new Set(recipes.map(r => r.appliance)))
    }
  }
  class IngredientSelector extends AbstractSelector {
    constructor(recipes, type) {
      super(recipes, type)
    }
    
    loadRecipes(recipes) {
      this.itemsList = Array.from(new Set(recipes.map(r => r.appliance)))
    }
  }
  class UstensilSelector extends AbstractSelector {
    constructor(recipes, type) {
      super(recipes, type)
    }
    
    loadRecipes(recipes) {
      this.itemsList = Array.from(new Set(recipes.map(r => r.ustensils).flat()))
    }
  }
  
const applianceSelector = new ApplianceSelector(recipes, 'Appliance')
const ustensilSelector = new UstensilSelector(recipes, 'Ustensil')
const ingredientSelector = new IngredientSelector(recipes, 'Ingredient')


console.log(recipes)
applianceSelector.displaySelectableItems()
ustensilSelector.displaySelectableItems()
ingredientSelector.displaySelectableItems()  