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
    SelectorDOM(){
      const dropdowns = document.querySelector('dropdowns')

      const btnGroup = document.createElement('div')
      btnGroup.className = 'btn-group'
      const button = document.createElement('button')
      button.className = 'btn btn-primary dropdown-toggle'
      button.type = 'button'
      const ul = document.createElement('ul')
      ul.className = 'dropdown-menu'

      dropdowns.append(btnGroup, button, ul)

      // return dropdowns
    }
    displaySelectableItems() {
      console.log(this.type, 'list :', this.itemsList)
    }
  }

console.log(recipes)
