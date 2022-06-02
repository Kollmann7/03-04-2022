import recipes from './data/recipes.js'
import UstensilSelector from "./ustensils.js"



export default class Selector {
    constructor(selectItemCallback) {
        this.selectItemCallback = selectItemCallback
        this.ustensils = ['saladier', 'poele', 'four']        
    }
    selectorDOM(){
        const dropdowns = document.getElementById('dropdowns-container')
    
        const btnGroup = document.createElement('div')
        btnGroup.className = 'btn-group'

        const button = document.createElement('button')
        button.className = 'btn btn-success dropdown-toggle'
        button.setAttribute('data-bs-toggle',"dropdown")
        button.type = 'button'
        button.textContent = 'Ustensil'

        const ul = document.createElement('ul')
        ul.className = 'dropdown-menu'

        const btn = document.createElement('button')
        btn.className = 'dropdown-item'
        btn.textContent = 'saladier'


        this.ustensils.forEach((ustensil) => {
            const li = document.createElement('li')
            li.textContent = ustensil
            ul.appendChild(li)
            li.addEventListener('click', (e) => {
                this.selectedTag(ustensil)
            })

        })
        
       
              
        btnGroup.append(button,ul)
        dropdowns.append(btnGroup )
    
        return dropdowns
    }  
    selectedTag(ustensil){
        this.selectItemCallback({type:'ustensil', label:ustensil})
        
    }
   
}
