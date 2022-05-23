
export default class TagList {
  constructor(removeCallback) {
    this.tags = []
    this.removeCallback = removeCallback
  }
  
  addTag(tag) {
    this.tags.push(tag)
    this.displayTagsDOM()

  }
  
  displayTagsDOM() {
    
    const keyWordTag = document.createElement('button')
    keyWordTag.className = 'btn keyword-tag'
    keyWordTag.textContent = this.text
    
    const img = document.createElement('img')
    img.className = 'delete-tag'
    img.src = './Img/cross.svg'
    img.alt = 'delete'
    
    keyWordTag.appendChild(img)
    
    keyWordTag.addEventListener('click', (e) =>
    this.removeTag()
    )
    
    return keyWordTag
  }
  
  removeTag(tag) {
    this.tags.remove(tag)
    this.displayTagsDOM()
    this.removeCallback()
  }
}

const test2 = new TagList
test2.addTag()