var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.getElementById("rgb");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");


colorDisplay.textContent = picked;

// assigning colors
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

// add click listeners to squares
squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
	if (clickedColor === picked) {
		messageDisplay.textContent= "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent= "Play Again?"
	} 
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again..";
	}
});
}

function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b +")";
}

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent= "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	messageDisplay.textContent= "";
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	picked = pickColor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = picked;
	for (var i = 0; i < squares.length; i ++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	messageDisplay.textContent= "";
	numSquares = 6
	colors = generateRandomColors(numSquares);
	picked = pickColor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = picked;
	for (var i = 0; i < squares.length; i ++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});





