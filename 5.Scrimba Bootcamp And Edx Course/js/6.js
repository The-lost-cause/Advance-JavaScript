let canvas, ctx

window.onload = init;

function init() {
    console.log('Inside init')
    canvas = document.querySelector('#myCanvas');
    // Context of the Canvass
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'seagreen'
    ctx.fillRect(10,10, 100, 100)

    // wireframe rectangle
    ctx.strokeStyle = 'yellow'
    ctx.lineWidth = 4;
    ctx.strokeRect(100, 40, 40, 40)

   // fill circle, will use current ctx.fillStyle
   ctx.beginPath();
   ctx.arc(60, 60, 10, 0, 2*Math.PI);
   ctx.fill();

    // some text
    ctx.fillStyle = "purple";
    ctx.font = "20px Arial";
    ctx.fillText("Hello!", 60, 20);
}