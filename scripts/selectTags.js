import recipes from './data/recipes.js'
import ApplianceSelector from './appliance.js'


export default class TagList {
  constructor(removeCallback) {
    this.removeCallback = removeCallback
    this.tags = []
  }
  
  addTag(tag) {    
    this.tags.push(tag)
    this.displayTagsDOM()
  }
  
  displayTagsDOM() {
    const tagList = document.querySelector('.tags')
    tagList.innerHTML = ''
    this.tags.forEach((tag) => {
      const button = document.createElement('button')
      button.textContent = tag.label
      button.classList.add('btn',`${tag.type}-color`, 'keyword-tag')
      const img = document.createElement('img')
      img.src = './Img/cross.svg'
      img.className = 'deleted-tag'

      button.appendChild(img)
      tagList.appendChild(button)

      button.addEventListener('click', () => {
        this.removeTag(tag)
        this.removeCallback()
      })
    })
  }
  
  removeTag(tag) {
    this.tags = this.tags.filter((t) => t !== tag)
    this.displayTagsDOM()
  }
}
