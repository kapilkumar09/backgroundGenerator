var color1 = document.querySelector(".first");
var color2 = document.querySelector(".second");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var rand = document.getElementById("randBtn");




function backgroundSetting(){
	body.style.background = "linear-gradient(to right, "
								+color1.value
								+", "
								+color2.value
								+")";

								h3.textContent = body.style.background+";";
}

function setGradient(){
	backgroundSetting();
}

function onLoading(){
	backgroundSetting();
}

function generateRandomColors(){
	
}

document.addEventListener("DOMContentLoaded",onLoading);

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);
	
rand.addEventListener("click",generateRandomColors);