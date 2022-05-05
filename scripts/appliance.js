import recipes from './data/recipes.js';

export class Appliances {
    constructor(recipe){
        this.recipeId = recipe.id
        this.name = recipe.name
        this.appliances = recipe.appliance
    }
    
    isAppliances(appliance){
        return (this.appliances === appliance)
    }

    applianceIncludeText(text){
       return (this.appliances.includes(text))
    }
}

export default class AppliancesList{
    constructor(data){
        this.appliances = data.map(recipe => new Appliances(recipe))
        this.displayedAppliances = this.appliances
    }
    filterByAppliancesText(text) {
        this.displayedAppliances = this.appliances.filter(recipe => recipe.isAppliances(text))
    }

    filterByAppliances(appliances){
        this.displayedAppliances = this.appliances.filter(recipe => recipe.applianceIncludeText(appliances))
    }
}

const appliancesList = new AppliancesList(recipes)

// class ApplianceSelector extends AbstractSelector {
//     constructor(recipes, type) {
//       super(recipes, type)
//     }
    
//     loadRecipes(recipes) {
//       this.itemsList = Array.from(new Set(recipes.map(r => r.appliance)))
//     }
//   }
  
// const applianceSelector = new ApplianceSelector(recipes, 'Appliance')
// applianceSelector.displaySelectableItems()

  
  appliancesList.filterByAppliancesText('Blender')
  console.log(appliancesList)
  
  
  appliancesList.filterByAppliances('Blen')
  console.log(appliancesList)
