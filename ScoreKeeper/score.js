var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = document.getElementById("dis1");
var p2Score = document.getElementById("dis2");
var win = document.querySelector("input");
var resetButton = document.getElementById("reset");
var playingto = document.getElementById("playto");
var gameOver = false;
var winningscore = 5;

var p1 = 0;
var p2 = 0;




p1Button.addEventListener("click", function () {
	if (!gameOver) {
		p1++;
		if (p1 === winningscore) {
			gameOver = true;
			p1Score.classList.add("winner");
		}
		p1Score.textContent = p1;
	}
});

p2Button.addEventListener("click", function () {
	if (!gameOver) {
		p2++;
		if (p2 === winningscore) {
			gameOver = true;
			p2Score.classList.add("winner");
		}
		p2Score.textContent = p2;	
	}
});

 
 function reset() {
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	p1 = 0;
	p2 = 0;
	gameOver = false;
}

resetButton.addEventListener("click", function () {
	reset();
});

win.addEventListener("change", function() {
	playingto.textContent = win.value;
	winningscore = Number(win.value);
	reset();
});
