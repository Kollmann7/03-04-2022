import recipes from './data/recipes.js'
import RecipeList from "./recipe.js"
import AppliancesList from "./appliance.js"
import UstensilList from "./appliance.js"
import IngredientList from "./ingredient.js"



const recipeList = new RecipeList(recipes)
const appliancesList = new AppliancesList(recipes)


export class SearchBar {
    constructor(){
        this.searchValue = document.getElementById('form1')
        this.recipeList = new RecipeList(recipes)
        this.appliancesList = new AppliancesList(recipes)
        this.ustensilList = new UstensilList(recipes)
        this.ingredientList = new IngredientList(recipes)
    }
    isRecipes(){
        recipeList.filterByIngredientText = this.searchValue

    }

}




