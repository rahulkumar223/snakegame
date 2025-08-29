import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
export let Score = 0;
let HighScore = 0;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    Score+=1;
    updateScore(Score)
    food = getRandomFoodPosition()
  }
}

export function updateScore(Score){

    if(HighScore<Score){
      HighScore = Score
      document.getElementById('high-score').innerHTML = 'HighScore: '+HighScore;
    }
    document.getElementById('score').innerHTML = 'Score: '+Score;
    
}

export function resetScore() {
  Score = 0
  updateScore(0)
  food = getRandomFoodPosition()
}
export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}