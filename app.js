const board = document.querySelector('#board')
const SQUARES_NUM = 504
const colors = ['#FFA1A1', '#069A8E', '#F9FFA4', '#B4FF9F', '#A85CF9']

for(i = 0; i < SQUARES_NUM; i++){
const square = document.createElement('div')
square.classList.add('square')
square.addEventListener('mouseover', () => 
   setColor(square))
square.addEventListener('mouseleave', ()=> 
   removeColor(square))

board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}
function removeColor(element){
    element.style.backgroundColor = 'rgb(58, 53, 53)'
    element.style.boxShadow = `0 0 5px #111`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
