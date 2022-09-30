const SPEED = 1
export default class Rectangle { 
  constructor(rectangleElement, height, width) {
    this.rectangleElement = rectangleElement;
    this.height = height;
    this.width = width;
  }

 // Idk why I cannot access those during my setInterval loop
  /*
  get lastRectangleHeight() {
    console.log("HIIIII")
    return getComputedStyle(this.squareElement).getPropertyValue('--height')
  }
  get lastRectangleWidth() {
    return getComputedStyle(this.squareElement).getPropertyValue('--width')
  }
  set lastRectangleHeight(value) {
    this.squareElement.style.setProperty("--height", `${value}`)
  }
  set lastRectangleWidth(value) {
    this.squareElement.style.setProperty("--width", `${value}`)
  }
  */

  request(height, width) {
    this.height = height;
    this.width = width;
  }


  update() {
  // Huge problem as Im calculating by VH units, the smallest unit is 1
  // Pixels wouldnt have been so much great either

	const getter = document.querySelector('#rectangle')

    let getterWidth = parseInt(getComputedStyle(getter).getPropertyValue('--width'))
    let getterHeight = parseInt(getComputedStyle(getter).getPropertyValue('--height'))


    if (getterWidth < this.width.value) {
      getter.style.setProperty("--width", `${getterWidth + SPEED}`)
      getter.style.border = "10px solid black"
    }
    else if(getterWidth > this.width.value){
      getter.style.setProperty("--width", `${getterWidth - SPEED}`)
      getter.style.border = "10px solid black"
    } 

    if (getterHeight < this.height.value) {
      getter.style.setProperty("--height", `${getterHeight + SPEED}`)
    }
    else if(getterHeight > this.height.value){
      getter.style.setProperty("--height", `${getterHeight - SPEED}`)
    } 

  }
}