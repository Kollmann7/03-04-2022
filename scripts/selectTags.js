
export default class TagList {
  constructor(removeCallback) {
    this.tags = []
    this.removeCallback = removeCallback
  }
  
  addTag(tag) {
    this.tags.push(tag)
  }
  
  displayTagsDOM() {
    const tagDOM = document.querySelector("tags")
    tagDOM.innerHTML = `<button type="button" class="btn keyword-tag">Primary<img src="./Img/cross.svg" class="delete-tag"></button>
    `
    console.log(tagDOM)
    return tagDOM
  }
  getDOM(){
    return this.displayTagsDOM()
  }
  removeTag(tag) {
    this.tags.remove(tag)
    this.displayTagsDOM()
    this.removeCallback()
  }
}
