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

let cells = slider.value * slider.value;
let color = "#000000";
let mousePress = false;
let randomColor = false;

//Function to set the grid

const setGrid = function () {
  for (let i = 0; i < cells; i++) {
    let cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.addEventListener("mouseover", function () {
      if (mousePress) {
        cellDiv.style.backgroundColor = `${color}`;
      }
      if (randomColor && mousePress) {
        cellDiv.style.backgroundColor = `rgb(${colorRBG()},${colorRBG()},${colorRBG()})`;
      }
    });
    grid.insertAdjacentElement("beforeend", cellDiv);
  }
};

//Function for random RBG

const colorRBG = () => Math.trunc(Math.random() * 256);

// Function to create click-draw mechanic

const clickDraw = function () {
  grid.addEventListener("mousedown", function () {
    if (mousePress === false) {
      mousePress = true;
    }
  });
  grid.addEventListener("click", function () {
    if (mousePress === true) {
      mousePress = false;
    }
  });
};

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
  clickDraw();
  cells = slider.value * slider.value;
  grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  setGrid();
};

//Create initial grid

function initialGrid() {
  grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
  grid.style.gridTemplateRows = `repeat(16, 1fr)`;
  cells = 256;
  setGrid();
  clickDraw();
}

// Slider

slider.addEventListener("input", function () {
  sliderScale.textContent = `${slider.value} x ${slider.value}`;
  clearGrid();
  createGrid();
});

// Buttons

btnBlack.addEventListener("click", function () {
  color = "black";
  randomColor = false;
});

btnRandom.addEventListener("click", function () {
  randomColor = true;
});

btnEraser.addEventListener("click", function () {
  color = "whitesmoke";
  randomColor = false;
});

btnClear.addEventListener("click", createGrid);
