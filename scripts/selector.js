import ApplianceSelector from './appliance.js'
import IngredientSelector from './ingredient.js'
import UstensilSelector from './ustensils.js'




export default class Selector {
    constructor(selectItemCallback) {
        this.selectItemCallback = selectItemCallback
        }
    dropdownsDOM(){
        const dropdowns = document.querySelector('dropdown-menu')
        dropdowns.innerHTML = `<li><a class="dropdown-item" href="#">Sucre</a></li>`
        return dropdowns
        
    }
    getDOM(){
        return this.dropdownsDOM()
    }
        
}


// const selector = new Selector
// selector.dropdownsDOM()
