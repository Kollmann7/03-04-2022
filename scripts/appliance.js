import recipes from './data/recipes.js';
import AbstractSelector from './abstractSelector.js';

export default class ApplianceSelector extends AbstractSelector {
    constructor(recipes, type) {
        super(recipes, type)
    }

    loadRecipes(recipes) {
        this.itemsList = Array.from(new Set(recipes.map(r => r.appliance)))
    }
}

const applianceSelector = new ApplianceSelector(recipes, 'Appliance')
applianceSelector.displaySelectableItems()
