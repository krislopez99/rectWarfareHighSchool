document.onkeypress = changeValue;
var playerX = 9, playerY = 9, playerDir = 2, oldKill1 = 0, resetText = true, color = -1, round = 1, ask = false, askMenu = -1, playerRoom, shoot = true, mainScreenNum = 1, mainScreen = true, upload = false, quitMenu = 1, bulletType = -1, rAmmo = 10, eAmmo = 10, oldKill2 = 0, gameMode = 1, pause = -1, kills = 0, score = 0, health = 100, powerHealthTimer, powerHealth = false, start = true, controlsCount = 0, menu = 1, roundTimer, store = false, controlsScreen = true, controls = false, storeMenu = 1, shootTimer, currentSpawns = 0, wantedSpawns, roundPause = true;


function changeValue(event) {
	if(event.keyCode == 109) {
		buttonCode('m');
		if(controlsScreen != true) {
			mButton.style.borderColor = "white";
		}
	} else if(event.keyCode == 32) {
		buttonCode(' ');
		if(controlsScreen != true) {
			spaceButton.style.borderColor = "white";
		}
	} else if(event.keyCode == 49) {
		buttonCode('1');
		if(controlsScreen != true) {
			oneButton.style.borderColor = "white";
		}
	} else if(event.keyCode == 97) {
		buttonCode('a');
		if(controlsScreen != true) {
			aButton.style.borderColor = "white";
		}
	} else if(event.keyCode == 100) {
		buttonCode('d');
		if(controlsScreen != true) {
			dButton.style.borderColor = "white";
		}
	} else if(event.keyCode == 119) {
		buttonCode('w');
		if(controlsScreen != true) {
			wButton.style.borderColor = "white";
		}
	} else if(event.keyCode == 115) {
		buttonCode('s');
		if(controlsScreen != true) {
			sButton.style.borderColor = "white";
		}
	}
}


function checkRoom(x, y) {
	var x = x;
	var y = y;
	if(x >= 1 && x <= 12 && y >= 1 && y <= 12) {
		return 1;
	} else if(x >= 14 && x <= 45 && y >= 1 && y <= 10) {
		return 2;
	} else if(x >= 47 && x <= 58 && y >= 1 && y <= 12) {
		return 3;
	} else if(x >= 1 && x <= 12 && y >= 14 && y <= 34) {
		return 4;
	} else if(x >= 14 && x <= 21 && y >= 12 && y <= 42) {
		return 5;
	} else if(x >= 23 && x <= 36 && y >= 12 && y <= 58) {
		return 6;
	} else if(x >= 38 && x <= 45 && y >= 12 && y <= 42) {
		return 7;
	} else if(x >= 47 && x <= 58 && y >= 14 && y <= 34) {
		return 8;
	} else if((x >= 1 && x <= 12 && y >= 36 && y <= 49) || (x >= 13 && x <= 21 && y >= 44 && y <= 49)) {
		return 9;
	} else if((x >= 47 && x <= 58 && y >= 36 && y <= 49) || (x >= 38 && x <= 46 && y >= 44 && y <= 49)) {
		return 10;
	} else if(x >= 1 && x <= 21 && y >= 51 && y <= 58) {
		return 11;
	} else if(x >= 38 && x <= 58 && y >= 51 && y <= 58) {
		return 12;
	}
}


function setGame() {
	playerX = Math.ceil(Math.random() * (boardValues[0].length - 1));
	playerY = Math.ceil(Math.random() * (boardValues[0].length - 1));
	while(boardValues[playerY][playerX] != 0) {
		playerX = Math.ceil(Math.random() * (boardValues[0].length - 1));
		playerY = Math.ceil(Math.random() * (boardValues[0].length - 1));
	}
	for(var a = 0; a < 75; a+=15) {
		if((playerX <= a && playerX >= a - 15) && a != 0) {
			xOffset = a - 15;
		}
		if((playerY <= a && playerY >= a - 15) && a != 0) {
			yOffset = a - 15;
		}
	}
	playerRoom = checkRoom(playerX, playerY);
	if(gameMode == 1) {
		wantedSpawns = 10;
	} else {
		wantedSpawns = 15;
	}
}


function roundSystem() {
	if(currentSpawns < wantedSpawns && roundPause != true) {
		enemies.push(new Enemy());
		currentSpawns++;
	} else if(roundPause != true && enemies.length == 0) {
		roundPause = true;
		currentSpawns = 0;
		if(gameMode == 1) {
			wantedSpawns+=10;
		} else {
			wantedSpawns+=15;
		}
		round++;
		timeout();
	}
}


function timeout() {
	var actual = 225;
	var current = 0;
	roundTimer = setInterval(
		function() {
			if(current < actual && pause != 1 && !document.hidden && container.height < container.width) {
				current++;
			} else if(current >= actual && pause != 1 && !document.hidden && container.height < container.width) {
				roundPause = false;
				clearInterval(roundTimer);
			}
		}, 1
	);
}


function spawnBoxes() {
	if(oldKill1 + 10 <= kills) {
		var xloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
		var yloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
		while(boardValues[yloc][xloc] != 0) {
			xloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
			yloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
		}
		boardValues[yloc][xloc] = 3;
		oldKill1 = kills;
	}
	if(oldKill2 + 6 <= kills) {
		var xloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
		var yloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
		while(boardValues[yloc][xloc] != 0) {
			xloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
			yloc = Math.ceil(Math.random() * (boardValues[0].length - 1));
		}
		boardValues[yloc][xloc] = 4;
		oldKill2 = kills;
	}
	if(boardValues[playerY][playerX] == 3) {
		boardValues[playerY][playerX] = 0;
		if(health + 15 < 100) {
			health+=15;
		} else {
			health = 100;
		}
	} else if(boardValues[playerY][playerX] == 4) {
		boardValues[playerY][playerX] = 0;
		rAmmo+=8;
	}
}


function processBullets() {
	for(var a = 0; a < bullets.length; a++) {
		var bullet = bullets[a];
		bullet.screenMovement();
	}	
}


function processEnemies() {
	for(var b = 0; b < enemies.length; b++) {
		var enemy = enemies[b];
		enemy.screenMovement();
	}
}