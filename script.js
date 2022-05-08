//variables defined for functions, DOM and UI

let container = document.getElementById('container'); //let used as container will be called in 2 different functions
const colorButtons = document.querySelectorAll('.color-choice');
const clearButton = document.getElementById('clearButton');
const resizeButton = document.getElementById('resizeButton');
let color = 'black'; //initial color is chosen as black when page is loaded
let value = 16; //onload grid size

/*---new function-----
allowing to create default grid by 16x16 */

function createGrid(value) {

  container.style.setProperty('--grid-rows', value);
  container.style.setProperty('--grid-cols', value);

  for (i = 0; i < (value * value); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };

let gridPixels = container.querySelectorAll('div');
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid)); //colorGrid function called when mouse rotates inside the grid

};
createGrid(value);

