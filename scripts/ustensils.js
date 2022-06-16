import recipes from './data/recipes.js';
import AbstractSelector from './abstractSelector.js';

export default class UstensilSelector extends AbstractSelector {
    constructor(recipes, type, selectItemCallback, name) {
      super(recipes, type, selectItemCallback, name)
    }
    
    loadRecipes(recipes) {
      this.itemsList = Array.from(new Set(recipes.map(r => r.ustensils).flat()))
      super.loadRecipes()
      console.log(this.itemsList)
    }
  }



