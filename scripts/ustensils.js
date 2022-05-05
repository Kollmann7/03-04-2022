import recipes from './data/recipes.js';
import AbstractSelector from './abstractSelector.js';



export default class UstensilSelector extends AbstractSelector {
    constructor(recipes, type) {
      super(recipes, type)
    }
    
    loadRecipes(recipes) {
      this.itemsList = Array.from(new Set(recipes.map(r => r.ustensils).flat()))
    }
  }

const ustensilSelector = new UstensilSelector(recipes, 'Ustensil')
ustensilSelector.displaySelectableItems()


