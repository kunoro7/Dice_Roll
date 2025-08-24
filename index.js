var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
var src1 = "./images/dice" + randomNumber1 + ".png";
var dice6 = "./images/dice6.png";

document.querySelector(".img1").setAttribute("src",src1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);
var src2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",src2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent= "PLAYER 1 WINS";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").textContent= "It's a draw, roll again.";
}
