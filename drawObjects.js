var xOffset = 0, yOffset = 0, rAmmoColor = "white", eAmmoColor = "white", healthColor = "white", killsColor = "white", scoreColor = "white", oldKills, oldHealth = 100, oldrAmmo = 10, oldeAmmo = 10, oldScore = 0, resetColors = 0; 


function drawBoard() {
	for(var a = yOffset; a < yOffset + boardHeight/gridWidth; a++) {
		for(var b = xOffset; b < xOffset + boardHeight/gridWidth; b++) {
			if(boardValues[a][b] == 0) { 
				board.fillStyle = "black";
				board.fillRect((b - xOffset) * gridWidth, (a - yOffset) * gridWidth, gridWidth, gridWidth);
			} else if(boardValues[a][b] == 1) { 
				board.fillStyle = "#4EE2EC";
				board.fillRect((b - xOffset) * gridWidth, (a - yOffset) * gridWidth, gridWidth, gridWidth);
				board.fillStyle = "red";
				board.fillRect(((b - xOffset) * gridWidth),((a - yOffset) * gridWidth), gridWidth/2, gridWidth/2);
				board.fillStyle = "red";
				board.fillRect(((b - xOffset) * gridWidth) + (gridWidth/2),((a - yOffset) * gridWidth) + (gridWidth/2), gridWidth/2, gridWidth/2);
			} else if(boardValues[a][b] == 2) { 
				board.fillStyle = "white";
				board.fillRect((b - xOffset) * gridWidth, (a - yOffset) * gridWidth, gridWidth, gridWidth);
			} else if(boardValues[a][b] == 3) {
				board.fillStyle = "white";
				board.fillRect((b - xOffset) * gridWidth, (a - yOffset) * gridWidth, gridWidth, gridWidth);
				board.fillStyle = "#4EE2EC";
				board.fillRect(((b - xOffset) * gridWidth) + (gridWidth/4), ((a - yOffset) * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
			} else if(boardValues[a][b] == 4) {
				board.fillStyle = "white";
				board.fillRect((b - xOffset) * gridWidth, (a - yOffset) * gridWidth, gridWidth, gridWidth);
				board.fillStyle = "red";
				board.fillRect(((b - xOffset) * gridWidth),((a - yOffset) * gridWidth), gridWidth/2, gridWidth/2);
				board.fillStyle = "#4EE2EC";
				board.fillRect(((b - xOffset) * gridWidth) + (gridWidth/2),((a - yOffset) * gridWidth) + (gridWidth/2), gridWidth/2, gridWidth/2);
			}
		}
	}
	drawObjects();
}


function drawObjects() {	
	board.fillStyle = "white"
	board.fillRect((playerX - xOffset) * gridWidth,(playerY - yOffset) * gridWidth, gridWidth, gridWidth);
	board.fillStyle = "#4EE2EC";
	board.fillRect(((playerX - xOffset) * gridWidth) + (gridWidth/4),((playerY - yOffset) * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
	for(var b = 0; b < enemies.length; b++) {
		var enemy = enemies[b];
		enemy.draw();
	}
	for(var a = 0; a < bullets.length; a++) {
		var bullet = bullets[a];
		bullet.draw();
	}
	drawMiniMap();
	if(resetColors <= 0) {
		textColor();
		resetColors = 10;
	} else {
		resetColors--;
	}
	drawText();
}


function drawMiniMap() {
	board.globalAlpha = 0.6;
	board.fillStyle = "black";
	board.fillRect(0, 0, mapGridWidth * boardValues.length, mapGridWidth * boardValues.length);
	for(var a = 0; a < boardValues.length; a++) {
		for(var b = 0; b < boardValues.length; b++) {
			if(boardValues[a][b] == 0) { 
				board.fillStyle = "black";
				board.fillRect(b * mapGridWidth, a * mapGridWidth, mapGridWidth, mapGridWidth);
			} else if(boardValues[a][b] == 1) { 
				board.fillStyle = "#4EE2EC";
				board.fillRect(b * mapGridWidth, a * mapGridWidth, mapGridWidth, mapGridWidth);
			} else if(boardValues[a][b] == 2) { 
				board.fillStyle = "white";
				board.fillRect(b * mapGridWidth, a * mapGridWidth, mapGridWidth, mapGridWidth);
			} else if(boardValues[a][b] == 3 || boardValues[a][b] == 4) {
				board.fillStyle = "white";
				board.fillRect(b * mapGridWidth, a * mapGridWidth, mapGridWidth, mapGridWidth);
			}
		}
	}	
	board.fillStyle = "white";
	board.fillRect(playerX * mapGridWidth, playerY * mapGridWidth, mapGridWidth, mapGridWidth);
	board.globalAlpha = 1;
}


function textColor() {
	if(oldKills != kills) {
		killsColor = "#4EE2EC";
		oldKills = kills;
	} else {
		killsColor = "white";
	}
	if(oldScore != score) {
		scoreColor = "#4EE2EC";
		oldScore = score;
	} else {
		scoreColor = "white";
	}
	
	if(oldHealth != health) {
		healthColor = "#4EE2EC";
		oldHealth = health;
	} else {
		healthColor = "white";
	}
	
	if(oldeAmmo != eAmmo) {
		eAmmoColor = "#4EE2EC";
		oldeAmmo = eAmmo;
	} else {
		eAmmoColor = "white";
	}

	if(oldrAmmo != rAmmo) {
		rAmmoColor = "#4EE2EC";
		oldrAmmo = rAmmo;
	} else {
		rAmmoColor = "white";
	}
}


function drawText() {;
	textBoard.textAlign = "center";
	textBoard.fillStyle = killsColor;
	textBoard.font = (boardHeight/4)/3 + "px" + " Arial";
	textBoard.fillText("Kills: " + kills, (container.width/8) * 5, (boardHeight/4)/1.2);
	textBoard.fillStyle = scoreColor;
	textBoard.fillText("Score: " + score, (container.width/8) * 5, (boardHeight/4)/2.6);
	textBoard.fillStyle = healthColor;
	textBoard.fillText("Health: " + health, (container.width/8) * 3, (boardHeight/4)/1.2);
	textBoard.fillStyle = "white";
	textBoard.fillText("Round: " + round, (container.width/8) * 3, (boardHeight/4)/2.6);
	textBoard.fillStyle = eAmmoColor;
	textBoard.fillText("Rocket Ammo: " + eAmmo, (container.width/8), (boardHeight/4)/1.2);
	textBoard.fillStyle = rAmmoColor;
	textBoard.fillText("Regular Ammo: " + rAmmo, (container.width/8), (boardHeight/4)/2.6);
	textBoard.fillStyle = "white";
	if(bulletType == -1) {
		textBoard.fillText("Bullet Type: Regular", (container.width/8) * 7, (boardHeight/4)/1.2);
	} else {
		textBoard.fillText("Bullet Type: Rocket", (container.width/8) * 7, (boardHeight/4)/1.2);
	}
	if(gameMode == 1) {
		textBoard.fillText("Gamemode: Easy", (container.width/8) * 7, (boardHeight/4)/2.6);
	} else {
		textBoard.fillText("Gamemode: Hard", (container.width/8) * 7, (boardHeight/4)/2.6);
	}
}


function controlsScreen() {
	if(controlsCount == 0) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("The Following", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.fillText("Screens Will", canvas.width/2, canvas.width - (gridWidth * 10));
		board.fillText("Have Rules And", canvas.width/2, canvas.width - (gridWidth * 8.5));
		board.fillText("Instructions", canvas.width/2, canvas.width - (gridWidth * 7));
		board.fillText("That Will Help You", canvas.width/2, canvas.width - (gridWidth * 5.5));
		board.fillText("Play The Game", canvas.width/2, canvas.width - (gridWidth * 4));
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
	} else if(controlsCount == 1) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("M", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Go To Menu", canvas.width/2, canvas.width - (gridWidth * 7.75));
		board.fillText("And", canvas.width/2, canvas.width - (gridWidth * 6.25));
		board.fillText("Leave Menu", canvas.width/2, canvas.width - (gridWidth * 4.75));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		mButton.style.borderColor = "white";
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 2) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("W", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Move Player Up", canvas.width/2, canvas.width - (gridWidth * 7.75));
		board.fillText("And", canvas.width/2, canvas.width - (gridWidth * 6.25));
		board.fillText("Move Up In Menu", canvas.width/2, canvas.width - (gridWidth * 4.75));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		mButton.style.borderColor = "#4EE2EC";
		wButton.style.borderColor = "white";
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 3) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("S", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Move Player Down", canvas.width/2, canvas.width - (gridWidth * 7.75));
		board.fillText("And", canvas.width/2, canvas.width - (gridWidth * 6.25));
		board.fillText("Move Down In Menu", canvas.width/2, canvas.width - (gridWidth * 4.75));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		wButton.style.borderColor = "#4EE2EC";
		sButton.style.borderColor = "white";
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);					
	} else if(controlsCount == 4) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("A", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Move Player", canvas.width/2, canvas.width - (gridWidth * 7));
		board.fillText("Left", canvas.width/2, canvas.width - (gridWidth * 5.5));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		sButton.style.borderColor = "#4EE2EC";
		aButton.style.borderColor = "white";
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 5) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("D", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Move Player", canvas.width/2, canvas.width - (gridWidth * 7));
		board.fillText("Right", canvas.width/2, canvas.width - (gridWidth * 5.5));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		aButton.style.borderColor = "#4EE2EC";
		dButton.style.borderColor = "white";
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 6) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("SPACE", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Shoot Bullets", canvas.width/2, canvas.width - (gridWidth * 8.5));
		board.fillText("And", canvas.width/2, canvas.width - (gridWidth * 7));
		board.fillText("Click On Menu", canvas.width/2, canvas.width - (gridWidth * 5.5));
		board.fillText("Options", canvas.width/2, canvas.width - (gridWidth * 4));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		dButton.style.borderColor = "#4EE2EC";
		spaceButton.style.borderColor = "white";
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 7) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("1", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/10 + "px" + " Arial";
		board.fillText("Switch Ammo", canvas.width/2, canvas.width - (gridWidth * 7));
		board.fillText("Type", canvas.width/2, canvas.width - (gridWidth * 5.5));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		spaceButton.style.borderColor = "#4EE2EC";
		oneButton.style.borderColor = "white";		
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**CONTROLS**", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 8) {
		canvas.width = canvas.width;
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("Color Key", canvas.width/2, canvas.width - (gridWidth * 12));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillText("Player/Health Drop", (canvas.width/5) * 3, 4.9 * gridWidth);
		board.fillText("Ammo Drop", (canvas.width/5) * 3, 6.65 * gridWidth);
		board.fillText("A.I. Enemy", (canvas.width/5) * 3, 8.4 * gridWidth);
		board.fillText("Wall", (canvas.width/5) * 3, 10.15 * gridWidth);
		board.fillText("Door", (canvas.width/5) * 3, 11.9 * gridWidth);
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		board.fillStyle = "white";
		board.fillRect(3 * gridWidth, 4 * gridWidth, gridWidth, gridWidth);
		board.fillStyle = "#4EE2EC";
		board.fillRect((3 * gridWidth) + (gridWidth/4), (4 * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
		board.fillStyle = "white";
		board.fillRect(3 * gridWidth, 5.75 * gridWidth, gridWidth, gridWidth);
		board.fillStyle = "red";
		board.fillRect((3 * gridWidth),(5.75 * gridWidth), gridWidth/2, gridWidth/2);
		board.fillStyle = "#4EE2EC";
		board.fillRect((3 * gridWidth) + (gridWidth/2),(5.75 * gridWidth) + (gridWidth/2), gridWidth/2, gridWidth/2);
		board.fillStyle = "white";
		board.fillRect(3 * gridWidth, 7.5 * gridWidth, gridWidth, gridWidth);
		board.fillStyle = "red";
		board.fillRect((3 * gridWidth) + (gridWidth/4), (7.5 * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
		board.fillStyle = "#4EE2EC";
		board.fillRect(3 * gridWidth, 9.25 * gridWidth, gridWidth, gridWidth);
		board.fillStyle = "red";
		board.fillRect((3 * gridWidth),(9.25 * gridWidth), gridWidth/2, gridWidth/2);
		board.fillStyle = "red";
		board.fillRect((3 * gridWidth) + (gridWidth/2),(9.25 * gridWidth) + (gridWidth/2), gridWidth/2, gridWidth/2);
		board.fillStyle = "white";
		board.fillRect(3 * gridWidth, 11 * gridWidth, gridWidth, gridWidth);
		oneButton.style.borderColor = "#4EE2EC";		
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/1.5 + "px" + " Arial";
		textBoard.fillText("**GAME LAYOUT*", textBox.width/2, textBox.height/1.35);
	} else if(controlsCount == 9) {
		board.fillStyle = "white";
		board.textAlign = "center";
		board.font = boardHeight/5 + "px" + " Arial";
		board.fillText("Rules", canvas.width/2, canvas.width - (gridWidth * 11.5));
		board.font = boardHeight/20+ "px" + " Arial";
		board.fillText("Rect() Warfare Is A Survival Game", canvas.width/2, canvas.width - (gridWidth * 10));
		board.fillText("With An Infinite Amount Of Rounds", canvas.width/2, canvas.width - (gridWidth * 9.25));
		board.fillText("And Advanced Enemy A.I. Controls", canvas.width/2, canvas.width - (gridWidth * 8.5));
		board.fillText("The Goal Of The Game Is To Survive", canvas.width/2, canvas.width - (gridWidth * 7));
		board.fillText("As Many Rounds As Possible On", canvas.width/2, canvas.width - (gridWidth * 6.25));
		board.fillText("Easy Or Hard Mode", canvas.width/2, canvas.width - (gridWidth * 5.5));
		board.fillText("Any Enemy Within The Game Is", canvas.width/2, canvas.width - (gridWidth * 4));
		board.fillText("Able To Shoot You", canvas.width/2, canvas.width - (gridWidth * 3.25));
		board.font = boardHeight/15 + "px" + " Arial";
		board.fillStyle = "#4EE2EC";
		board.fillText("Press Space To Continue", canvas.width/2, canvas.width - (gridWidth * 1.5));
		board.fillText("Press M To Skip The Directions", canvas.width/2, canvas.width - (gridWidth * 0.5));
		textBoard.fillStyle = "white";
		textBoard.textAlign = "center";
		textBoard.font = textBox.height/4.8 + "px" + " Arial";
		textBoard.fillText("**The Store Can Be Accessed Through The Menu, And Rocket Ammo/Health Power-Ups Can Be Bought From It**", textBox.width/2, textBox.height/2.5);
		textBoard.fillText("**Health Packs and Ammo Packs Spawn Randomly Throughout The Map For A Certain Amount Of Kills**", textBox.width/2, textBox.height/1.3);
	}
}