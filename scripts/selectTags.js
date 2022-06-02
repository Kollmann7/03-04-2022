import recipes from './data/recipes.js'
import ApplianceSelector from './appliance.js'


export default class TagList {
  constructor(removeCallback) {
    this.tags = []
    this.removeCallback = removeCallback
    const tag = document.querySelectorAll('.dropdown-item')
    console.log(tag)
    
  }
  
  addTag(tag) {    
    this.tags.push(tag)
    this.displayTagsDOM()
    console.log('tag ajouter a tagList', this)
  }
  
  displayTagsDOM() {

    const tagList = document.querySelector('.tags')

    tagList.innerHTML = ''
    this.tags.forEach((tag) => {
      const button = document.createElement('button')
      button.textContent = tag.label
      tagList.appendChild(button)
    })
    
  }
  
  removeTag(tag) {
    this.tags.remove(tag)
    this.displayTagsDOM()
    this.removeCallback()
  }
}
