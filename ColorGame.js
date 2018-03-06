var squaresNum = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var guessResult = document.querySelector("#guessResult");
var rgb = document.querySelector("#rgbInfo");
var pickedColor = 0;
var resetButton = document.querySelector("#resetButton");
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");
var isEasy = false;
resetGame();



resetButton.addEventListener("click", function() {
	resetGame();
});

easyMode.addEventListener("click", function(){
	if (isEasy == false) {
		isEasy = true;
		resetGame();
	}

});

hardMode.addEventListener("click", function(){
	if (isEasy == true) {
		isEasy = false;
		resetGame();
	}
	
});


for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor) {
			h1.style.backgroundColor = pickedColor;
			changeColor(pickedColor);
			resetButton.innerHTML = "Play Again";
			guessResult.innerHTML = "Correct!";
		}else {
			this.style.backgroundColor = "#232323";
			guessResult.textContent = "Try again!";
		}
	});
}



function changeColor(color) {
	for (var i = 0; i < squaresNum; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomPick(num) {
	var random = Math.floor(Math.random() * num);
	return colors[random];
}

function colorGenerator(num) {
	var array = [];
	for (var i = 0; i < num; i++) {
		var c = randomColor();
		array.push(c);
	}
	if(num < squares.length) {
		for (var i = squares.length; i > num; i--) {
			array.push("rgb(35, 35, 35)");
		}
	}
	return array;
}

function resetGame() {
	squaresNum = (isEasy? 3: 6);
	colors = colorGenerator(squaresNum);
	pickedColor = randomPick(squaresNum);
	rgb.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
	resetButton.innerHTML = "New colors";
	guessResult.innerHTML = "";
	h1.style.backgroundColor = "steelblue";
	if(isEasy) {
		easyMode.classList.add("selected");
		hardMode.classList.remove("selected");
	} else {
		easyMode.classList.remove("selected");
		hardMode.classList.add("selected");
	}
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}