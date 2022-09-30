import Rectangle from './Rectangle.js'


const form = document.getElementById('form')
form.addEventListener('submit', (e) => {

  e.preventDefault()
  const width = document.getElementById('width').value
  const height = document.getElementById('height').value
  const rectangle = new Rectangle(document.getElementById('rectangle'))
  

  if (width > 100 || width <= 0) {
    console.log("ALOOOO ?")
    alert('Please enter a width between 0 and 100')
  }
  else if (height > 100 || height <= 0) {
    alert('Please enter a width between 0 and 100')
  } else if (height != 0 && width != 0){

    rectangle.request(width, height)

    setInterval(rectangle.update, 50)
  }
})


// rock pappers scissors 
import Item from './Item.js'
import Game from './Game.js'

const items = document.querySelectorAll('.left p')
const game = new Game()
const wrapper = document.querySelector('.wrapper-game')

let playerCount = 0
let computerCount = 0

items.forEach((item) => {

  item.addEventListener('click', () => {
    items.forEach((el) => { el.style.border = 'none'})

    item.style.border = '5px solid'



    
    let choice = new Item(item.classList.value)  
    console.log(choice)
    let computedNumber = randomNumber()
    console.log(game.play(choice, computedNumber))
   
    if (game.play(choice, computedNumber) === choice.itemElement) {
      wrapper.style.backgroundColor = "blue"
      game.update("human")
  
    } else if (game.play(choice, computedNumber) === computedNumber){
      wrapper.style.backgroundColor = "red"
      game.update("computer")
    } else {
      wrapper.style.backgroundColor = "green"
    }
    
   
  }
  )
})


function randomNumber() {
  return (Math.round(Math.random()*2))
}







