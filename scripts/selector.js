import recipes from './data/recipes.js'


export default class Selector {
    constructor(selectItemCallback, ustensilsSelector) {
        this.selectItemCallback = selectItemCallback
        this.ustensils = ustensilsSelector.itemsList     
    }
    selectorDOM(){
        const dropdowns = document.getElementById('dropdowns-container')
    
        const btnGroup = document.createElement('div')
        btnGroup.className = 'btn-group'

        const button = document.createElement('button')
        button.className = 'btn btn-success dropdown-toggle'
        button.setAttribute('data-bs-toggle','dropdown')
        button.type = 'button'

        const textSelector = document.createElement('span')
        textSelector.textContent = 'Ustensil'

        button.appendChild(textSelector)
        button.addEventListener('click', () => {
            console.log(input.value)
            if(textSelector.style.visibility  === 'hidden' && input.value === null){
                textSelector.style.visibility  = 'visible'
            }else{
                textSelector.style.visibility  = 'hidden'
            }
        })

        
        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'Recherche un ustensil'
        input.className = 'input-selector'
        button.addEventListener('input', () => {
            Array.from(ul.childNodes).forEach((listItem) => {
                const item = listItem.textContent.toLowerCase();
                if (!item.includes(input.value)) {
                    listItem.style.display = 'none'
                } else {
                    listItem.style.display = 'block'
                }
            })
        })

        button.appendChild(input)

        const ul = document.createElement('ul')
        ul.className = 'dropdown-menu'
 
        this.ustensils.forEach((ustensil) => {
            const li = document.createElement('li')
            li.textContent = ustensil
            li.className = 'dropdown-item'
            ul.appendChild(li)
            li.addEventListener('click', () => {
                this.selectedTag(ustensil)
            })
        })
        
        btnGroup.append(button,ul)
        dropdowns.append(btnGroup)
    
        return dropdowns
    }
    selectedTag(ustensil){
        this.selectItemCallback({type:'ustensil', label:ustensil})   
    }
}
