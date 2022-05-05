import recipes from './data/recipes.js';

export  class Ustensil{
    constructor(recipe){
        this.recipeId = recipe.id
        this.name = recipe.name
        this.ustensil = recipe.ustensils
    }

    containsUstensil(ustensil) {
        return this.ustensil.some(ustensilItem => ustensilItem === ustensil.toLowerCase())
    }
    
    ustensilIncludeText(text){
        return this.ustensil.some(ustensilItem => ustensilItem.includes(text.toLowerCase()))
    }
}

export default class UstensilList{
    constructor(data){
        this.ustensil = data.map(recipe => new Ustensil(recipe))
        this.displayedUstensil = this.ustensil
    }

    filterByUstensilText(text){
        this.displayedUstensil = this.ustensil.filter(recipe => recipe.containsUstensil(text))
    }

    filterByIngredient(ustensil) {
        this.displayedUstensil = this.ustensil.filter(recipe => recipe.ustensilIncludeText(ustensil))
    }
}

const ustensilList = new UstensilList(recipes)

ustensilList.filterByUstensilText("SalaDIer")
console.log(ustensilList)

ustensilList.filterByIngredient("Sal")
console.log(ustensilList)

