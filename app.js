let x,y,z;

document.getElementById("roll").onclick = function() {
    x = Math.floor((Math.random() * 10))
    y = Math.floor((Math.random() * 10))
    z = Math.floor((Math.random() * 10))

    document.getElementById("dicea").innerHTML = "Dice A: " + x;
    document.getElementById("diceb").innerHTML = "Dice B: " + y;
    document.getElementById("dicec").innerHTML = "Dice C: " + z;
}
