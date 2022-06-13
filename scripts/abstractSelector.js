import recipes from './data/recipes.js'

export default class AbstractSelector {
    constructor(recipes, type, selectItemCallback) {
      this.loadRecipes(recipes)
      this.type = type
      this.selectItemCallback = selectItemCallback
      this.selectorDOM()
    }
    selectorDOM(){
      const dropdowns = document.getElementById('dropdowns-container')
  
      const btnGroup = document.createElement('div')
      btnGroup.className = 'btn-group'

      const button = document.createElement('div')
      button.className = 'btn btn-success dropdown-toggle'
      button.setAttribute('data-bs-toggle','dropdown')

      const textSelector = document.createElement('span')
      textSelector.textContent = this.type
      textSelector.className = 'selector-name'

      button.appendChild(textSelector)
      button.addEventListener('click', () => {
          input.className = 'input-selector-display'  
          if(textSelector.style.display  === 'none' && input.value === null){
              textSelector.style.display  = 'block'
          }else(textSelector.style.display  === 'block' && input.value != null)
          {
              textSelector.style.display  = 'none'
          }
      })
      
      const input = document.createElement('input')
      input.type = 'text'
      input.placeholder = 'Recherche un ustensile'
      input.className = 'input-selector'
      button.addEventListener('input', () => {
          Array.from(ul.childNodes).forEach((listItem) => {
              const item = listItem.textContent.toLowerCase()
              if (!item.includes(input.value)) {
                  console.log(item.value)
                  listItem.style.display = 'none'
              } else {
                  console.log(item)
                  listItem.style.display = 'block'
              }
          })
      })

      button.appendChild(input)

      const ul = document.createElement('ul')
      ul.className = 'dropdown-menu'

      this.itemsList.forEach((item) => {
          const li = document.createElement('li')
          li.textContent = item
          li.className = 'dropdown-item'
          ul.appendChild(li)
          li.addEventListener('click', () => {
              this.selectedTag(item)
          })
      })
      
      btnGroup.append(button,ul)
      dropdowns.append(btnGroup)
  
      return dropdowns
    }
    loadRecipes(recipes) {
      throw new Error('loadRecipes should be implemented')
    }
    displaySelectableItems() {
      console.log(this.type, 'list :', this.itemsList)
    }
    selectedTag(ustensil){
      this.selectItemCallback({type:'ustensil', label:ustensil})   
    }
  }

console.log(recipes)

