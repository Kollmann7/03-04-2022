import recipes from './data/recipes.js'
import Recipe from './recipe.js'


export default class RecipeList {
  constructor(recipe) {
    this.recipes = recipes.map(recipe => new Recipe(recipe))
    this.displayedRecipes = this.recipes
    
  }
 
  ingredientsList(ingredientList){
    const { ingredient, quantity, unit } = ingredientList
    const li = document.createElement('li')
    const ingredientName = document.createElement('strong')
    const ingredientQuantity = document.createElement('span')

    if(unit === null){
      ingredientName.textContent = ingredient
      ingredientQuantity.textContent = quantity
      li.appendChild(ingredientName, ingredientQuantity)
    }
    else {
      ingredientName.textContent = `${ingredient}: `
      ingredientQuantity.textContent = quantity + unit
      li.append(ingredientName, ingredientQuantity)
    }
    return li
  }
  
  recipeDOM(recipe) {
    const { description, ingredients, name, time } = recipe

    const card = document.createElement('div')
    card.className = 'card'

    const imgRecipe = document.createElement('img')
    imgRecipe.scr = './Img/grey-square.jpg'
    imgRecipe.className = 'card-img-top'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    const cardBodyTop = document.createElement('div')
    cardBodyTop.className = 'card-body-top'

    const title = document.createElement('h2')
    title.className = 'card-title'
    title.textContent = name

    const timer = document.createElement('div')
    timer.className = 'cook-time'

    const timerImg = document.createElement('img')
    timerImg.src = './Img/timer.svg'
    timerImg.className = 'timer'

    const timerText = document.createElement('span')
    timerText.textContent = `${time} Mins`
   
    const cardBodyBot = document.createElement('div')
    cardBodyBot.className = 'card-body-bot'

    const ingredientList = document.createElement('ul')
    ingredientList.className = 'ingredients-list'
    ingredients.forEach((ingredient) => {
      const li = this.ingredientsList(ingredient)
      ingredientList.appendChild(li)
    })

    const paragraph = document.createElement('p')
    paragraph.className = 'description'
    paragraph.textContent = description

    
    timer.append(timerImg, timerText) 
    cardBodyBot.append(ingredientList, paragraph)
    cardBodyTop.append(title, timer)
    cardBody.append(cardBodyTop, cardBodyBot )
    card.append(imgRecipe, cardBody )

    return card
  }

  recipesListDOM(recipes){
    const recipeDOM = document.getElementById('recipe-container')

    recipeDOM.innerHTML = ''
    recipes.forEach((recipe) => {
      const recipeCard = this.recipeDOM(recipe)
      recipeDOM.appendChild(recipeCard)
    })
  }


  noResultDOM(){
    const noRecipesDOM = document.getElementById('recipe-container')

    const container = document.createElement('div')
    container.className = 'no-recipe'
    container.textContent = ` Votre recherche ne correspond a aucun critère `

    return noRecipesDOM
  }

  recipeVerifySearch(tagsAppliances, tagsUstensil, tagsIngredient, searchBar, recipe){
    return (
      (tagsAppliances.length === 0 || tagsAppliances.includes(recipe.appliance)) 
      && (tagsUstensil.length === 0 || tagsUstensil.every( ustensilTag => recipe.containsUstensil(ustensilTag)))
      && (tagsIngredient.length === 0 || tagsIngredient.every( ingredientTag => recipe.containsIngredient(ingredientTag)))
      && (recipe => recipe.nameIncludeText(searchBar) || recipe.descIncludeText(searchBar))
    )
  }

  filtering(tagsAppliances, tagsUstensil, tagsIngredient, searchBar) {
    tagsAppliances = ['Four']
    tagsUstensil = ['fouet']
    tagsIngredient = ['Lait']
    searchBar = ''
    let filterList = this.recipes
      .filter( recipe => (
        this.recipeVerifySearch(tagsAppliances, tagsUstensil, tagsIngredient, searchBar, recipe)
      )) 

    console.log('Filter SEARCH',filterList)

    if (filterList.length > 0){
      this.recipesListDOM(filterList)
    }else{
      this.noResultDOM()
    }
    return  filterList
  }
}

const test = new RecipeList
test.filtering()
