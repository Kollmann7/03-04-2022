import recipes from './data/recipes.js';
import AbstractSelector from './abstractSelector.js';


export default class IngredientSelector extends AbstractSelector {
  constructor(recipes, type, selectItemCallback, name) {
    super(recipes, type, selectItemCallback, name)
  }
  
  loadRecipes(recipes) {
    this.ingredientsList = recipes.map(r => r.ingredients).flat()
    this.itemsList = Array.from(new Set(this.ingredientsList.map(i => i.ingredient)))
    super.loadRecipes()
  }
}