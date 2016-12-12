function start(){
    setTimeout(stroke,300);
}
    var b = document.querySelectorAll(".st1");
    var c = document.querySelectorAll(".st0");
function stroke(){
    c[0].style.strokeWidth = "7";
    setTimeout(fill,400);
}
function fill(){
    b[0].style.fill = "#FFF";
    b[1].style.fill = "#FFF";
    b[2].style.fill = "#FFF";
    b[3].style.fill = "#FFF";
    b[4].style.fill = "#FFF";
    setTimeout(fill2,200);
}
function fill2(){
    b[5].style.fill = "#FFF";
    b[6].style.fill = "#FFF";
    b[7].style.fill = "#FFF";
    b[8].style.fill = "#FFF";
    b[9].style.fill = "#FFF";
}
start();