var canvas = document.getElementById("element");
var container = document.getElementById("container");
container.height = window.innerHeight;
container.width = window.innerWidth;
var board = canvas.getContext("2d");


var boardValues = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
var boardHeight = findWidth();
var gridWidth = boardHeight/15;
var mapGridWidth = (boardHeight/3)/boardValues.length;


function findWidth() {
	container.height = window.innerHeight;
	container.width = window.innerWidth;
	for(var size = 1350; size > 90; size-=45) {
		if(container.height/1.45 > size) {
			return size;
			break;
		}
	}
}


function load() {
	setInterval(
		function() {
			if(pause != 1 && !document.hidden && container.height < container.width && health > 0) {
				processEnemies();
			}
		}, 215
	);
	setInterval(
		function() {
			color*=-1;
		}, 175
	);
	setInterval(
		function() {
			if(pause != 1 && health > 0 && start != true && !document.hidden && container.height < container.width) {
				roundSystem();
			}
		}, 1000
	);
	setInterval(
		function() {
			sButton.style.borderColor = "#4EE2EC";
			wButton.style.borderColor = "#4EE2EC";
			aButton.style.borderColor = "#4EE2EC";
			dButton.style.borderColor = "#4EE2EC";
			spaceButton.style.borderColor = "#4EE2EC";
			oneButton.style.borderColor = "#4EE2EC";
			mButton.style.borderColor = "#4EE2EC";
		}, 425
	);
	setInterval(
		function() {
			constructLayout();
			if(!document.hidden && container.height < container.width) {
				if(mainScreen != false) {
					canvas.width = canvas.width;
					board.textAlign = "center";
					board.fillStyle = "white";
					board.font = boardHeight/8 + "px" + " Arial";
					board.fillText("Rect()", boardHeight/2, (boardHeight/2) - (gridWidth * 4.5));	
					board.font = boardHeight/6 + "px" + " Arial";
					board.fillText("Warfare", boardHeight/2, (boardHeight/2) - (gridWidth * 2.5));	
					if(mainScreenNum == 1) {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
					} else {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
					}
					board.fillStyle = "red";
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
					board.font = boardHeight/10 + "px" + " Arial";
					board.fillStyle = "white";
					board.textAlign = "center";
					board.fillText("Play", canvas.width/2, canvas.width - (gridWidth * 6.4));
					board.fillText("Scores", canvas.width/2, canvas.width - (gridWidth * 2.4));
				} if(controlsScreen != false && mainScreen != true) { 
					controlsScreen();
				} else if(pause != 1 && health > 0 && start != true) {
					canvas.width = canvas.width;
					drawBoard();
					processBullets();
					if(roundPause != false) {
						board.textAlign = "center";
						board.fillStyle = "white";
						board.font = boardHeight/8 + "px" + " Arial";
						board.fillText("Round " + round, boardHeight/2, boardHeight - (gridWidth * 7));
					}
					spawnBoxes();
					if(powerHealth != false) {
						if(color == -1){
							board.globalAlpha = 0.2;
							board.fillStyle = "white";
							board.fillRect(0, 0, boardHeight, boardHeight);
							board.globalAlpha = 1;
						}
					}
				} else if(health <= 0 && start != true && upload != true) {
					if(ask != true) {
						canvas.width = canvas.width;
						board.textAlign = "center";
						board.fillStyle = "white";
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillText("Score: " + score, boardHeight/2, (boardHeight/2) - (gridWidth * 4.7));
						board.fillText("Kills: " + kills, boardHeight/2, (boardHeight/2) - (gridWidth * 3.3));
						board.fillText("Rounds: " + round, boardHeight/2, (boardHeight/2) - (gridWidth * 2));
						if(quitMenu == 1) {
							board.fillStyle = "white";
							board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
						} else {
							board.fillStyle = "white";
							board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
						}
						board.fillStyle = "red";
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillStyle = "white";
						board.textAlign = "center";
						board.fillText("Menu", canvas.width/2, canvas.width - (gridWidth * 6.4));
						board.fillText("Upload", canvas.width/2, canvas.width - (gridWidth * 2.4));
						eAmmoColor = "white";
						rAmmoColor = "white";
						killsColor = "white";
						healthColor = "white";
						scoreColor = "white";
						drawText();
						clearTimers();
						health = 0;
					} else {
						canvas.width = canvas.width;
						board.textAlign = "center";
						board.fillStyle = "white";
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillText("Are You Sure", boardHeight/2, (boardHeight/2) - (gridWidth * 5.7));
						board.fillText("You Don't Want", boardHeight/2, (boardHeight/2) - (gridWidth * 4.4));
						board.fillText("To Upload Your", boardHeight/2, (boardHeight/2) - (gridWidth * 3));
						board.fillText("Score?", boardHeight/2, (boardHeight/2) - (gridWidth * 1.7));
						if(askMenu == -1) {
							board.fillStyle = "white";
							board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
						} else {
							board.fillStyle = "white";
							board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
						}
						board.fillStyle = "red";
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillStyle = "white";
						board.textAlign = "center";
						board.fillText("Yes", canvas.width/2, canvas.width - (gridWidth * 6.4));
						board.fillText("No", canvas.width/2, canvas.width - (gridWidth * 2.4));
					}
				} else if(health <= 0 && start != true && upload != false) {
					drawBoard();
					canvas.width = canvas.width;
					board.textAlign = "center";
					board.fillStyle = "white";
					board.font = boardHeight/20 + "px" + " Arial";
					board.fillText("Enter The Name", boardHeight/2, (boardHeight/2) - (gridWidth * 6.2));
					board.fillText("You Want With", boardHeight/2, (boardHeight/2) - (gridWidth * 5.4));
					board.fillText("Your Score And", boardHeight/2, (boardHeight/2) - (gridWidth * 4.6));
					board.fillText("Press Enter To", boardHeight/2, (boardHeight/2) - (gridWidth * 3.8));
					board.fillText("Upload It To The", boardHeight/2, (boardHeight/2) - (gridWidth * 3));
					board.fillText("Player Leaderboard", boardHeight/2, (boardHeight/2) - (gridWidth * 2.2));
					eAmmoColor = "white";
					rAmmoColor = "white";
					killsColor = "white";
					healthColor = "white";
					scoreColor = "white";
					drawText();
					health = 0;
				} else if(pause == 1 && start != true && (controls != true && store != true)) {
					canvas.width = canvas.width;
					drawBoard();
					if(roundPause != false) {
						board.textAlign = "center";
						board.fillStyle = "white";
						board.font = boardHeight/8 + "px" + " Arial";
						board.fillText("Round " + round, boardHeight/2, boardHeight - (gridWidth * 7));
					}
					board.globalAlpha = 0.6;
					board.fillStyle = "black";
					board.fillRect(0, 0, boardHeight, boardHeight);
					board.globalAlpha = 1;
					board.textAlign = "center";
					board.fillStyle = "white";
					board.font = boardHeight/5 + "px" + " Arial";
					board.fillText("Menu", boardHeight/2, (boardHeight/2) - (gridWidth * 3));	
					if(menu == 1) {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
					} else {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
					}
					board.fillStyle = "red";
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
					board.font = boardHeight/10 + "px" + " Arial";
					board.fillStyle = "white";
					board.textAlign = "center";
					board.fillText("Store", canvas.width/2, canvas.width - (gridWidth * 6.4));
					board.fillText("Controls", canvas.width/2, canvas.width - (gridWidth * 2.4));
				}  else if(controls != false && pause == 1 && start != true) {
					if(ask != true) {
						canvas.width = canvas.width;
						drawBoard();
						if(roundPause != false) {
							board.textAlign = "center";
							board.fillStyle = "white";
							board.font = boardHeight/8 + "px" + " Arial";
							board.fillText("Round " + round, boardHeight/2, boardHeight - (gridWidth * 7));
						}
						board.globalAlpha = 0.6;
						board.fillStyle = "black";
						board.fillRect(0, 0, boardHeight, boardHeight);
						board.globalAlpha = 1;
						board.fillStyle = "white";
						board.textAlign = "center";
						board.font = boardHeight/5 + "px" + " Arial";
						board.fillText("Controls", boardHeight/2, (boardHeight/2) - (gridWidth * 4.5));	
						board.font = boardHeight/20 + "px" + " Arial";
						board.fillText("M = Go To Menu/Leave Menu", canvas.width/2, canvas.width - (gridWidth * 10.5));
						board.fillText("Space = Shoot/Enter Choice", canvas.width/2, canvas.width - (gridWidth * 9.5));
						board.fillText("1 = Switch Bullet Type", canvas.width/2, canvas.width - (gridWidth * 8.5));
						board.fillText("W = Up Movement/Move In Menu", canvas.width/2, canvas.width - (gridWidth * 7.5));
						board.fillText("S = Down Movement/Move In Menu", canvas.width/2, canvas.width - (gridWidth * 6.5));
						board.fillText("A = Left Movement", canvas.width/2, canvas.width - (gridWidth * 5.5));
						board.fillText("D = Right Movement", canvas.width/2, canvas.width - (gridWidth * 4.5));
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 3.25), canvas.width/2.36, canvas.width/5.75);
						board.fillStyle = "red";
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 3), canvas.width/2.5, canvas.width/7);
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillStyle = "white";
						board.textAlign = "center";
						board.fillText("Quit", canvas.width/2, canvas.width - (gridWidth * 1.40));
					} else {
						canvas.width = canvas.width;
						board.textAlign = "center";
						board.fillStyle = "white";
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillText("Are You Sure", boardHeight/2, (boardHeight/2) - (gridWidth * 4.7));
						board.fillText("You Want To Quit", boardHeight/2, (boardHeight/2) - (gridWidth * 3.4));
						board.fillText("This Game?", boardHeight/2, (boardHeight/2) - (gridWidth * 2));
						if(askMenu == -1) {
							board.fillStyle = "white";
							board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
						} else {
							board.fillStyle = "white";
							board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
						}
						board.fillStyle = "red";
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
						board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
						board.font = boardHeight/10 + "px" + " Arial";
						board.fillStyle = "white";
						board.textAlign = "center";
						board.fillText("Yes", canvas.width/2, canvas.width - (gridWidth * 6.4));
						board.fillText("No", canvas.width/2, canvas.width - (gridWidth * 2.4));
					}
				} else if(store != false && pause == 1 && start != true) {
					canvas.width = canvas.width;
					drawBoard();
					if(roundPause != false) {
						board.textAlign = "center";
						board.fillStyle = "white";
						board.font = boardHeight/8 + "px" + " Arial";
						board.fillText("Round " + round, boardHeight/2, boardHeight - (gridWidth * 7));
					}
					board.globalAlpha = 0.6;
					board.fillStyle = "black";
					board.fillRect(0, 0, boardHeight, boardHeight);
					board.globalAlpha = 1;
					board.textAlign = "center";
					board.fillStyle = "white";
					board.font = boardHeight/5 + "px" + " Arial";
					board.fillText("Store", boardHeight/2, (boardHeight/2) - (gridWidth * 3));	
					if(storeMenu == 1) {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
					} else {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
					}
					board.fillStyle = "red";
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
					board.font = boardHeight/20 + "px" + " Arial";
					board.fillStyle = "white";
					board.textAlign = "center";
					board.fillText("Explosive Ammo", canvas.width/2, canvas.width - (gridWidth * 7.1));
					board.fillText("300 points", canvas.width/2, canvas.width - (gridWidth * 6.3));
					board.fillText("Health Power-Up", canvas.width/2, canvas.width - (gridWidth * 3.1));
					board.fillText("650 points", canvas.width/2, canvas.width - (gridWidth * 2.3));
				}	else if(start != false && mainScreen != true && controlsScreen != true) {
					canvas.width = canvas.width;
					board.textAlign = "center";
					board.fillStyle = "white";
					board.font = boardHeight/8 + "px" + " Arial";
					board.fillText("Choose", boardHeight/2, (boardHeight/2) - (gridWidth * 4.5));	
					board.fillText("Difficulty", boardHeight/2, (boardHeight/2) - (gridWidth * 2.8));	
					if(gameMode == 1) {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 8.25), canvas.width/2.36, canvas.width/5.75);
					} else {
						board.fillStyle = "white";
						board.fillRect((canvas.width/2) - (canvas.width/4.75), canvas.width - (gridWidth * 4.25), canvas.width/2.36, canvas.width/5.75);
					}
					board.fillStyle = "red";
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 8), canvas.width/2.5, canvas.width/7);
					board.fillRect((canvas.width/2) - (canvas.width/5), canvas.width - (gridWidth * 4), canvas.width/2.5, canvas.width/7);
					board.font = boardHeight/10 + "px" + " Arial";
					board.fillStyle = "white";
					board.textAlign = "center";
					board.fillText("Easy", canvas.width/2, canvas.width - (gridWidth * 6.4));
					board.fillText("Hard", canvas.width/2, canvas.width - (gridWidth * 2.4));
				}
			}
		}, 1
	);
}


function constructLayout() {
	if(container.height < container.width) {
		boardHeight = findWidth();
		gridWidth = boardHeight/15;
		mapGridWidth = (boardHeight/3)/boardValues.length;
		canvas.style.backgroundColor = "black";
		canvas.width = boardHeight;
		canvas.height = boardHeight;
		canvas.style.top = 0 + "px";
		canvas.style.left = ((container.width/2) - ((canvas.height + 10)/2)) + "px";
		canvas.style.borderWidth = "5px";
	} else {
		boardHeight = findWidth();
		canvas.width = container.width;
		canvas.height = container.height;
		canvas.style.borderWidth = "0px";
		canvas.style.top = "0px";
		canvas.style.left = "0px";
		board.strokeStyle = "black";
		board.fillRect(0, (container.height/4) * 1.2, container.width, (container.height/4) * 1.5);
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = container.width/5 + "px" + " Arial";
		board.fillText("ROTATE", container.width/2, (container.height/4) * 1.9);
		board.fillText("DEVICE", container.width/2, (container.height/4) * 2.4);
		board.strokeStyle = "#4EE2EC";
		board.lineWidth = "10";
		board.strokeRect(0, (container.height/4) * 1.2, container.width, (container.height/4) * 1.5);
	}
	buttonLayout();
}


function clearTimers() {
	clearInterval(shootTimer);
	clearInterval(roundTimer);
	clearInterval(powerHealthTimer);
}