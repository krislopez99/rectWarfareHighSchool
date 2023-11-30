var canvas = document.getElementById("element");
var board = canvas.getContext("2d");

function load() {
	setInterval(
		function() {
			if(window.innerHeight < window.innerWidth) {
				var div = document.getElementsByClassName('textBox');
				for (var i = 0; i < div.length; i++) {
					div[i].style.width = window.innerWidth/2;
					div[i].style.height = window.innerHeight/4;
					div[i].style.borderWidth = "5px";
				}
				
				var space = document.getElementsByClassName('spaceBox');
				for (var i = 0; i < space.length; i++) {
					space[i].style.height = window.innerHeight/8;
				}
				
				var playerText = document.getElementsByClassName('playerText');
				for (var i = 0; i < playerText.length; i++) {
					playerText[i].style.fontSize = window.innerHeight/12;
					playerText[i].style.lineHeight = window.innerHeight/1200 + "%";
				}
				
				var killsText = document.getElementsByClassName('killsText');
				for (var i = 0; i < killsText.length; i++) {
					killsText[i].style.fontSize = window.innerHeight/20;
				}
				
				document.getElementById('exit').style.width = window.innerWidth/3;
				document.getElementById('exit').style.height = window.innerHeight/8;
				document.getElementById('exit').style.borderWidth = "5px";
				document.getElementById('exitText').style.fontSize = window.innerHeight/15;
				document.getElementById('exitText').style.lineHeight = window.innerHeight/1200 + "%";
				canvas.width = 0;
				canvas.height = 0;
			} else {
				var div = document.getElementsByClassName('textBox');
				for (var i = 0; i < div.length; i++) {
					div[i].style.width = 0;
					div[i].style.height = 0;
					div[i].style.borderWidth = 0;
				}
				
				var space = document.getElementsByClassName('spaceBox');
				for (var i = 0; i < space.length; i++) {
					space[i].style.height = 0;
				}
				
				var playerText = document.getElementsByClassName('playerText');
				for (var i = 0; i < playerText.length; i++) {
					playerText[i].style.fontSize = 0;
					playerText[i].style.lineHeight = 0;
				}
				
				var killsText = document.getElementsByClassName('killsText');
				for (var i = 0; i < killsText.length; i++) {
					killsText[i].style.fontSize = 0;
				}
				
				document.getElementById('exit').style.width = 0;
				document.getElementById('exit').style.height = 0;
				document.getElementById('exit').style.borderWidth = 0;
				document.getElementById('exitText').style.fontSize = 0;
				document.getElementById('exitText').style.lineHeight = 0;
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				canvas.style.top = "0px";
				canvas.style.left = "0px";
				board.strokeStyle = "black";
				board.fillRect(0, (window.innerHeight/4) * 1.2, window.innerWidth, (window.innerHeight/4) * 1.5);
				board.fillStyle = "white";
				board.textAlign = "center";
				board.font = window.innerWidth/5 + "px" + " Arial";
				board.fillText("ROTATE", window.innerWidth/2, (window.innerHeight/4) * 1.9);
				board.fillText("DEVICE", window.innerWidth/2, (window.innerHeight/4) * 2.4);
				board.strokeStyle = "#4EE2EC";
				board.lineWidth = "10";
				board.strokeRect(0, (window.innerHeight/4) * 1.2, window.innerWidth, (window.innerHeight/4) * 1.5);
			}
		}, 1
	);
}

function exit() {
	window.open('http://localhost', "_self");
}
