import recipes from './data/recipes.js';
import AbstractSelector from './abstractSelector.js';


class IngredientSelector extends AbstractSelector {
  constructor(recipes, type) {
    super(recipes, type)
  }
  
  loadRecipes(recipes) {
    this.ingredientsList = recipes.map(r => r.ingredients).flat()
    this.itemsList = Array.from(new Set(this.ingredientsList.map(i => i.ingredient)))
  }
}

const ingredientSelector = new IngredientSelector(recipes, 'Ingredient')
ingredientSelector.displaySelectableItems()

