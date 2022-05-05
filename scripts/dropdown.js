import recipes from './data/recipes.js';
import AppliancesList from "./appliance.js"
import UstensilList from "./appliance.js"
import IngredientList from "./ingredient.js"

export default class Dropdowns {
    constructor(){
        this.appliancesList = new AppliancesList(recipes)
        this.ustensilList = new UstensilList(recipes)
        this.ingredientList = new IngredientList(recipes)
    }
    ingredientSelected(){
    ingredientList.filterByIngredient('')
    console.log(ingredientList)
    }
}