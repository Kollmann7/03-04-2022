import { TAG_TYPE } from './constants.js'
import recipes from './data/recipes.js'
import Recipe from './recipe.js'


export default class RecipeList {
  constructor(recipe) {
    this.recipes = recipes.map(recipe => new Recipe(recipe))
  }
 
  ingredientsList(ingredientList){
    const { ingredient, quantity, unit } = ingredientList
    const li = document.createElement('li')
    const ingredientName = document.createElement('strong')
    const ingredientQuantity = document.createElement('span')

    if(!unit ){
      ingredientName.textContent = `${ingredient}: `
      ingredientQuantity.textContent = quantity
      li.append(ingredientName, ingredientQuantity)
    }
    else {
      ingredientName.textContent = `${ingredient}: `
      ingredientQuantity.textContent = `${quantity + ' ' + unit} `
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

    noRecipesDOM.innerHTML = ''
    const container = document.createElement('div')
    container.className = 'no-recipe'
    container.textContent = ` « Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc. `

    noRecipesDOM.appendChild(container)

    return noRecipesDOM
  }

  tagsAppliancesVerifySearch(tagsAppliances,  recipe){
    return (
      (tagsAppliances.length === 0 || tagsAppliances.includes(recipe.appliance)) 
    )
  }
  tagsUstensilVerifySearch( tagsUstensil, recipe){
    return (
      (tagsUstensil.length === 0 || tagsUstensil.every( ustensilTag => recipe.containsUstensil(ustensilTag)))
    )
  }
  tagsIngredientVerifySearch( tagsIngredient,  recipe){
    return (
      (tagsIngredient.length === 0 || tagsIngredient.every( ingredientTag => recipe.containsIngredient(ingredientTag)))
    )
  }
  searchBarVerifySearch( searchBar, recipe){
    return (
      (recipe.nameIncludeText(searchBar) || recipe.descIncludeText(searchBar) || recipe.containsIngredient(searchBar))
    )
  }

  filtering(tags, searchBar) {

    const tagsAppliances = tags.filter( tag => tag.type === TAG_TYPE.APPLIANCE).map(tag => tag.label)
    const tagsUstensil = tags.filter( tag => tag.type === TAG_TYPE.USTENSIL).map(tag => tag.label)
    const tagsIngredient = tags.filter( tag => tag.type === TAG_TYPE.INGREDIENT).map(tag => tag.label)
    
    
    let filterList = this.recipes
      .filter( recipe => (
        this.tagsAppliancesVerifySearch(tagsAppliances, recipe)
      ))
    let filterList2 = filterList
      .filter( recipe => (
        this.tagsUstensilVerifySearch(tagsUstensil, recipe)
      ))
    let filterList3 = filterList2     
      .filter( recipe => (
        this.tagsIngredientVerifySearch(tagsIngredient, recipe)
      ))
    let filterList4 = filterList3    
      .filter( recipe => (
        this.searchBarVerifySearch( searchBar, recipe)
    ))
    
    if (filterList4.length > 0){
      this.recipesListDOM(filterList4)
    }else{
      this.noResultDOM()
    }
    return  filterList4
  }
}

