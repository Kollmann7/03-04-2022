import recipes from './data/recipes.js'

export default class AbstractSelector {
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

console.log(recipes)
