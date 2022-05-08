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

/*---new function-----
allowing to color the cells by choosing black- random - grayscale color modes*/

function colorGrid() {
  switch (color) {
      case 'rainbow':
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          this.classList.remove('gray');
          break;
      case 'gray':
          if (this.style.backgroundColor.match(/rgba/)) {
              let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
              if (currentOpacity <= 0.9) {
                  this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                  this.classList.add('gray');
              }
          } else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
              return;
          } else {
              this.style.backgroundColor = 'black';
          }
          break;
      case 'black':
          this.style.backgroundColor = '#000000';
          this.classList.remove('gray');
          break;
      default:
          this.style.backgroundColor = color;
          this.classList.remove('gray');
          break;
  }
}


  /*---new function-----
Allowing to change color*/

function changeColor(e) {
  switch (e.target.dataset.color) { 
      case 'rainbow':
          color = 'rainbow';
          break;  
      case 'gray':
          color = 'gray';
          break;
      default:
          color = 'black';
          break;
  } 
}

  /*---new function-----
Triggering color change function*/

function userColorSelection(e) {
  color = e.target.value;
}












