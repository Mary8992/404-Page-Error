//major div that contain background picture.
const container = document.querySelector("#container");
//or we can write:document.getElementById('container')

window.onmousemove = function(move) {
    //junction of x & y is the point that we need
    //by deviding to 7,time is  decreased and the mines means :move vice versa

    let x = -move.clientX / 5;
    let y = -move.clientY / 5;

    //background image active so we have background position X and Y
    //in another word:do background position based on my mouse position
    container.style.backgroundPositionX = x + "px";
    container.style.backgroundPositionY = y + "px";
}