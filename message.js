const recipesData = [{
        "id": 1,
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantite" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
    },
    {
        "id": 2,
        "name" : "Poisson Cru à la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient" : "Thon Rouge (ou blanc)",
                "quantity" : 200,
                "unit" : "grammes"
            },
            {
                "ingredient" : "Concombre",
                "quantity" : 1
            },
            {
                "ingredient" : "Tomate",
                "quantity" : 2
            },
            {
                "ingredient" : "Carotte",
                "quantite" : 1
            },
            {
                "ingredient" : "Citron Vert",
                "quantity" : 5
            },
            {
                "ingredient" : "Lait de Coco",
                "quantity" : 100,
                "unit" : "ml"
            }
        ],
        "time": 60,
        "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
        "appliance": "Saladier",
        "ustensils": ["presse citron"]
    },{
        "id": 3,
        "name": "Poulet coco réunionnais",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poulet",
                "quantity" : 1          
            },
            {
                "ingredient": "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity" : 25,
                "unit" : "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity" : 1
            },
            {
                "ingredient": "Poivron rouge",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
               "unit": "cuillères à soupe"
            }
        ],
        "time": 80,
        "description": "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliance": "Cocotte",
        "ustensils": ["couteau"]
    }
]

class Recipe {
  constructor(recipe) {
    this.appliance = recipe.appliance
    this.ustensils = recipe.ustensils
  }
}

const recipes = recipesData.map(r => new Recipe(r))

class AbstractSelector {
  constructor(recipes, type, selectCallback) {
    this.loadRecipes(recipes)
    this.type = type
    this.selectCallback = selectCallback
  }
  
  loadRecipes(recipes) {
    throw new Error('loadRecipes should be implemented')
  }
  
  displaySelectableItems() {
    console.log(this.type, 'list :', this.itemsList)
  }
}

class ApplianceSelector extends AbstractSelector {
  constructor(recipes, type) {
    super(recipes, type)
  }
  
  loadRecipes(recipes) {
    this.itemsList = Array.from(new Set(recipes.map(r => r.appliance)))
  }
}

class UstensilSelector extends AbstractSelector {
  constructor(recipes, type) {
    super(recipes, type)
  }
  
  loadRecipes(recipes) {
    this.itemsList = Array.from(new Set(recipes.map(r => r.ustensils).flat()))
  }
}

const applianceSelector = new ApplianceSelector(recipes, 'Appliance')
const ustensilSelector = new UstensilSelector(recipes, 'Ustensil')

console.log(recipes)
applianceSelector.displaySelectableItems()
ustensilSelector.displaySelectableItems()












class Page {
  constructor() {
    this.tagList = new TagList(this.refresh)
    this.recipeList = new RecipeList()
    this.ustensilSelector = new Selector(this.addTag)
  }
  
  refresh() {
    // Récupérer les filtres (tags + searchBar)
    // this.recipeList.sort(tags, text)
    // this.ustensilSelector.loadRecipes(this.recipeList)
  }
  
  addTag(tag) {
    this.tagList.addTag(tag)
    this.refresh()
  }
}

class TagList {
  constructor(removeCallback) {
    this.tags = []
    this.removeCallback = removeCallback
  }
  
  addTag(tag) {
    this.tags.push(tag)
  }
  
  displayDOM() {
    
  }
  
  removeTag(tag) {
    this.tags.remove(tag)
    this.displayDOM()
    this.removeCallback()
  }
}

class Selector {
  constructor(selectItemCallback) {
    this.selectItemCallback = selectItemCallback
  }
}

class RecipeList {
  displayDOM() {
    
  }
  
  sort() {
    this.recipes.filter()
    this.displayDOM()
  }
}
