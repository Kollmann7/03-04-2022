import recipes from './data/recipes.js'

export default class AbstractSelector {
    constructor(recipes, type, selectItemCallback, name, update) {
      this.type = type
      this.selectItemCallback = selectItemCallback
      this.name = name
      this.update = update
      this.selectorDOM()
      this.loadRecipes(recipes)
    }
    selectorDOM(){
      const dropdowns = document.getElementById('dropdowns-container')
  
      const btnGroup = document.createElement('div')
      btnGroup.className = 'btn-group'

      const button = document.createElement('div')
      button.classList.add('btn', `${this.type}-color`, 'dropdown-toggle') 
      button.setAttribute('data-bs-toggle','dropdown')

      const textSelector = document.createElement('span')
      textSelector.textContent = this.name
      textSelector.className = 'selector-name'

      button.appendChild(textSelector)
      button.addEventListener('click', () => {
          input.className = 'input-selector-display'
          textSelector.className = 'selector-name-display-none'
      })
      btnGroup.addEventListener('hide.bs.dropdown', () => {
          input.className = 'input-selector-display-none'
          textSelector.className = 'selector-name'

        console.log('click')
      })

      const input = document.createElement('input')
      input.type = 'text'
      input.placeholder = `Rechercher des ${this.name.toLowerCase()}`
      input.className = 'input-selector-display-none'
      button.addEventListener('input', () => {
          Array.from(ul.childNodes).forEach((listItem) => {
              const item = listItem.textContent.toLowerCase()
              if (!item.includes(input.value)) {
                  listItem.style.display = 'none'
              } else {
                  listItem.style.display = 'block'
              }
          })
      })

      button.appendChild(input)

      const ul = document.createElement('ul')
      ul.classList.add('dropdown-menu', `${this.type}-color`)      
      this.ul = ul

      btnGroup.append(button,ul)
      dropdowns.append(btnGroup)
      
    }
    refreshList(){
      this.ul.innerHTML= ''
      
      this.itemsList.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item
        li.className = 'dropdown-item'
        this.ul.appendChild(li)
        li.addEventListener('click', () => {
          this.selectedTag(item)
        })
      })
    }
    loadRecipes(recipes) {
      this.refreshList()
    }
    
    selectedTag(label){
      this.selectItemCallback({type:`${this.type}`, label:label})
    }
  }


