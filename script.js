// Grid default with 16x16

/*
document.addEventListener ('DOMContentLoaded', function () {
    createGrid(size)
})

let size = slider.value;


function createGrid (size) {
    let grid = document.querySelector (".grid");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let cellDivs = size * size;

    for (let i = 0; i < cellDivs; i++){
        let cellDiv = document.createElement("cellDiv");
        cellDiv.classList.add("cellDiv");gi
        grid.insertAdjacentElement ("beforeend",cellDiv);
    }
}

//Slider

// function getSliderValue () {
//     const slider = document.getElementById('slider');
//     const sliderValue = slider.value;
//     console.log ("Slider value:", sliderValue)
//     return sliderValue
// }

let sliderScale = document.getElementById ('sliderScale');



//Grid

 slider.addEventListener ('input', function() {
    let grid = document.querySelector('.grid');
    let gridScale = slider.value * slider.value;
    sliderScale.innerText = slider.value + " " + "x" + " " + slider.value;
    console.log ("Slider value:", slider.value)
    console.log ("GridScale is:", gridScale)

    const cell = document.createElement("cell");

    let gridColumnRow = slider.value;

    function makeCells (gridColumnRow) {
        for (let i = 0; i < gridColumnRow; i++) {
            for (let j = 0; j < gridColumnRow; j++) {
            const cell = document.createElement("cell");
            cell.classList.add("cell");
            grid.append(cell);
            }  
        }
    }


    makeCells(gridColumnRow);

})

PREVIOUS CODE

NEW CODE
*/

document.addEventListener("DOMContentLoaded", initialGrid);
//CREATING BASIC GRID HERE;

// Selectors

const grid = document.getElementById("grid");
const btnBlack = document.getElementById("blackBtn");
const btnRandom = document.getElementById("randomBtn");
const btnEraser = document.getElementById("eraserBtn");
const btnDarken = document.getElementById("darkenBtn");
const btnClear = document.getElementById("clearBtn");
const slider = document.getElementById("slider");
const sliderScale = document.getElementById("sliderScale");
const cellel = document.querySelectorAll("cellDiv");

let sliderValue = slider.value;
let cells = slider.value * slider.value;
let color = "#000000";

//Function to clear the grid

const clearGrid = function () {
  cells = 0;
  grid.replaceChildren();
  grid.style.gridTemplateColumns = "";
  grid.style.gridTemplateRows = "";
};

//Function to create a grid

const createGrid = function () {
  clearGrid();
  cells = slider.value * slider.value;
  grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  console.log(cells);

  for (let i = 0; i < cells; i++) {
    let cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    // Remember to edit the event listener here later!!!!
    cellDiv.addEventListener("mouseover", function () {
      cellDiv.style.backgroundColor = `${color}`;
    });
    grid.insertAdjacentElement("beforeend", cellDiv);
  }
};

//Create initial grid

function initialGrid() {
  grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
  grid.style.gridTemplateRows = `repeat(16, 1fr)`;
  cells = 256;

  for (let i = 0; i < cells; i++) {
    let cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.setAttribute("draggable", "false");
    // Remember to edit the event listener here later!!!!
    cellDiv.addEventListener("mouseover", function () {
      cellDiv.style.backgroundColor = `${color}`;
    });
    grid.insertAdjacentElement("beforeend", cellDiv);
  }
}

// Slider

slider.addEventListener("input", function () {
  sliderScale.textContent = `${slider.value} x ${slider.value}`;
  clearGrid();
  createGrid();
  console.log(slider.value);
  console.log(cells);
});

// Buttons

btnClear.addEventListener("click", createGrid);
btnBlack.addEventListener("click", function () {
  color = "black";
});
btnEraser.addEventListener("click", function () {
  color = "whitesmoke";
});

const colorR = function () {
  return Math.trunc(Math.random() * 256);
};

const colorG = function () {
  return Math.trunc(Math.random() * 256);
};

const colorB = function () {
  return Math.trunc(Math.random() * 256);
};
btnRandom.addEventListener("click", function () {
  color = `rgb(${colorR()}, ${colorG()}, ${colorB()})`;
});
