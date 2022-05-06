import recipes from './data/recipes.js'
import Recipe from './recipe.js'


export default class RecipeList {
  constructor(recipe) {
    console.log(recipe)
    this.recipes = recipes.map(recipe => new Recipe(recipe))
    this.displayedRecipes = this.recipes
    console.log(this.recipes)
    
  }
  displayDOM() {
    
  }
  
  filtering(tagsAppliances, tagsUstensil, searchBar) {
    tagsAppliances = ['Blender','Saladier','Cocotte']
    tagsUstensil = ['fouet','moule à gateaux', 'casserolle']
    searchBar = 'coco'
    const filterAppliancesResult = this.recipes.filter( recipe => tagsAppliances.includes(recipe.appliance))
    console.log('filterAppliancesResult',filterAppliancesResult)
    const filterUstensilResult = this.recipes.filter( recipe => recipe.ustensils.every(ustensil => tagsUstensil.some(u => u === ustensil)))
    console.log('filterUstensilResult',filterUstensilResult)
    console.log( tagsUstensil.some(u => u === ustensil))

    this.displayDOM()
    
  }
}
  
const test = new RecipeList
test.filtering()