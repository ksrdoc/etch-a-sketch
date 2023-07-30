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
  console.log(cells);

  for (let i = 0; i < cells; i++) {
    let cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    // Remember to edit the event listener here later!!!!
    cellDiv.addEventListener("mouseover", function () {
      if (mousePress) {
        cellDiv.style.backgroundColor = `${color}`;
      }
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
      if (mousePress) {
        cellDiv.style.backgroundColor = `${color}`;
      }
    });
    grid.insertAdjacentElement("beforeend", cellDiv);
  }
  clickDraw();
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
