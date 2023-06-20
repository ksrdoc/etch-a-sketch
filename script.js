//Slider

function getSliderValue () {
    const slider = document.getElementById('slider');
    const sliderValue = slider.value;
    console.log ("Slider value:", sliderValue)
}

let sliderScale = document.getElementById ('sliderScale');



//Grid

const grid = document.querySelector('.grid')

slider.addEventListener ('input', function() {
    let gridScale = slider.value * slider.value;
    sliderScale.innerText = slider.value + " " + "x" + " " + slider.value;
    console.log ("Slider value:", slider.value)
    console.log ("GridScale is:", gridScale)

    const cell = document.createElement("cell");

    function clearGrid (gridScale) {
        for (let i = 0; i < gridScale - 1; i++) {
            grid.removeChild(cell);
        }
    }

    //clearGrid (gridScale)

    function makeCells (gridScale) {
        for (let i = 0; i < gridScale; i++) {
            const cell = document.createElement("cell");
            cell.classList.add("cell");
            grid.append(cell);
        }
    }
    makeCells(gridScale);
})










