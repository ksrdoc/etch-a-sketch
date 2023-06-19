function getSliderValue () {
    const slider = document.getElementById('slider');
    const sliderValue = slider.value;
    console.log ("Slider value:", sliderValue)
}

let sliderScale = document.getElementById ('sliderScale');

slider.addEventListener ('input', function() {
    sliderScale.innerText = slider.value + " " + "x" + " " + slider.value;
})
