// Grid default



document.addEventListener ('DOMContentLoaded', function () {
    createGrid()
})

function createGrid (size) {
    let grid = document.querySelector (".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

//Slider

function getSliderValue () {
    const slider = document.getElementById('slider');
    const sliderValue = slider.value;
    console.log ("Slider value:", sliderValue)
    return sliderValue
}

let sliderScale = document.getElementById ('sliderScale');

/*

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

}) */










