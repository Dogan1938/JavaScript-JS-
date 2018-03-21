//Zeichnen eines gefüllten, umrandeten Kreises:
function drawCircle() {
    var el = document.getElementById("draw");
    ctx = el.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

//Zeichnen eines Bogens: 
function drawArrow() {
    var el = document.getElementById("draw");
    ctx = el.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, width, 0, Math.PI, false);
    ctx.stroke();
}