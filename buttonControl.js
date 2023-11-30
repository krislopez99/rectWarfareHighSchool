var wButton = document.getElementById("w");
var aButton = document.getElementById("a");
var textBox = document.getElementById("text");
var sButton = document.getElementById("s");
var dButton = document.getElementById("d");
var oneButton = document.getElementById("1");
var mButton = document.getElementById("m");
var spaceButton = document.getElementById("space");
var wBoard = wButton.getContext("2d");
var aBoard = aButton.getContext("2d");
var textBoard = textBox.getContext("2d");
var sBoard = sButton.getContext("2d");
var dBoard = dButton.getContext("2d");
var oneBoard = oneButton.getContext("2d");
var mBoard = mButton.getContext("2d");
var spaceBoard = spaceButton.getContext("2d");


function buttonLayout() {
	if(container.height < container.width) {
		wButton.height = boardHeight/4;
		wButton.width = boardHeight/4;
		aButton.height = boardHeight/4;
		aButton.width = boardHeight/4;
		sButton.height = boardHeight/4;
		sButton.width = boardHeight/4;
		dButton.height = boardHeight/4;
		dButton.width = boardHeight/4;
		oneButton.height = boardHeight/4;
		oneButton.width = boardHeight/4;
		mButton.height = boardHeight/4;
		mButton.width = boardHeight/4;
		spaceButton.height = boardHeight/4;
		spaceButton.width = (boardHeight/4) * 3;
		wButton.style.borderWidth = "5px";
		aButton.style.borderWidth = "5px";
		sButton.style.borderWidth = "5px";
		dButton.style.borderWidth = "5px";
		oneButton.style.borderWidth = "5px";
		mButton.style.borderWidth = "5px";
		spaceButton.style.borderWidth = "5px";		
		wButton.style.top = 0 + "px";
		wButton.style.left = ((wButton.width + 10) + ((((container.width/2) - ((canvas.height + 10)/2)) - ((wButton.width*3) + 30)) / 2)) + "px";
		aButton.style.top = (aButton.width/2) + "px";
		aButton.style.left = ((((container.width/2) - ((canvas.height + 10)/2)) - ((wButton.width*3) + 30)) / 2) + "px";
		sButton.style.top = (wButton.height + 10) + "px";
		sButton.style.left = ((wButton.width + 10) + ((((container.width/2) - ((canvas.height + 10)/2)) - ((wButton.width*3) + 30)) / 2)) + "px";
		dButton.style.top = (aButton.width/2) + "px";
		dButton.style.left = (((wButton.width*2) + 20) + ((((container.width/2) - ((canvas.height + 10)/2)) - ((wButton.width*3) + 30)) / 2)) + "px";
		mButton.style.top = ((canvas.width + 10) - (mButton.width + 10)) + "px";
		mButton.style.left = ((wButton.width + 10) + ((((container.width/2) - ((canvas.height + 10)/2)) - ((wButton.width*3) + 30)) / 2)) + "px";
		spaceButton.style.top = (canvas.width/6) + "px";
		spaceButton.style.left = (container.width - ((spaceButton.width + 10) + ((((container.width/2) - ((canvas.height + 10)/2)) - ((spaceButton.width) + 10)) / 2))) + "px";
		oneButton.style.top = (canvas.height - (canvas.height/6) - oneButton.width) + "px";	
		oneButton.style.left = (container.width - ((wButton.width + 10) + ((((container.width/2) - ((canvas.height + 10)/2)) - ((oneButton.width) + 10)) / 2))) + "px";		
		wBoard.fillStyle = "white";
		wBoard.textAlign = "center";
		wBoard.font = boardHeight/5 + "px" + " Arial";
		wBoard.fillText("W", wButton.width/2, wButton.height/1.25);
		aBoard.fillStyle = "white";
		aBoard.textAlign = "center";
		aBoard.font = boardHeight/5 + "px" + " Arial";
		aBoard.fillText("A", wButton.width/2, wButton.height/1.25);
		sBoard.fillStyle = "white";
		sBoard.textAlign = "center";
		sBoard.font = boardHeight/5 + "px" + " Arial";
		sBoard.fillText("S", wButton.width/2, wButton.height/1.25);
		dBoard.fillStyle = "white";
		dBoard.textAlign = "center";
		dBoard.font = boardHeight/5 + "px" + " Arial";
		dBoard.fillText("D", wButton.width/2, wButton.height/1.25);
		mBoard.fillStyle = "white";
		mBoard.textAlign = "center";
		mBoard.font = boardHeight/5 + "px" + " Arial";
		mBoard.fillText("M", wButton.width/2, wButton.height/1.25);
		oneBoard.fillStyle = "white";
		oneBoard.textAlign = "center";
		oneBoard.font = boardHeight/5 + "px" + " Arial";
		oneBoard.fillText("1", wButton.width/2, wButton.height/1.25);
		spaceBoard.fillStyle = "white";
		spaceBoard.textAlign = "center";
		spaceBoard.font = boardHeight/5 + "px" + " Arial";
		spaceBoard.fillText("Space", spaceButton.width/2, wButton.height/1.4);
		if(upload != true) {
			textBox.height = boardHeight/4;
			textBox.width = container.width;
			textBox.style.top = (container.height - (textBox.height + 10)) + "px";
			textBox.style.left = "-5px";
			textBox.style.borderWidth = "5px";
		} else {
			textBox.height = 0;
			textBox.width = 0;
			textBox.style.top = 0;
			textBox.style.left = 0;
			textBox.style.borderWidth = 0;
		}
		if(upload != false) {
			document.getElementById('name').style.width = window.innerWidth;
			document.getElementById('name').style.height = boardHeight/2;
			document.getElementById('name').style.left = 0;
			document.getElementById('name').style.top = ((container.height - ((boardHeight/2) + 10))/2) + "px";
			document.getElementById('name').style.borderWidth = "5px";
			document.getElementById('name').style.fontSize = (boardHeight/3) + "px";
			if(resetText != false) {
				resetText = false;
				document.getElementById('name').value = "Type Here";
			}
			textBox.width = 0;
			textBox.height = 0;
			textBox.style.borderWidth = "0px";
			wButton.height = 0;
			wButton.width = 0;
			aButton.height = 0;
			aButton.width = 0;
			sButton.height = 0;
			sButton.width = 0;
			dButton.height = 0;
			dButton.width = 0;
			oneButton.height = 0;
			oneButton.width = 0;
			mButton.height = 0;
			mButton.width = 0;
			spaceButton.height = 0;
			spaceButton.width = 0;		
			wButton.style.borderWidth = "0px";
			aButton.style.borderWidth = "0px";
			sButton.style.borderWidth = "0px";
			dButton.style.borderWidth = "0px";
			oneButton.style.borderWidth = "0px";
			mButton.style.borderWidth = "0px";
			spaceButton.style.borderWidth = "0px";
			canvas.height = boardHeight/2.5;
		} else {
			document.getElementById('name').style.width = "0px";
			document.getElementById('name').style.height = "0px";
			document.getElementById('name').style.left = "-10px";
			document.getElementById('name').style.top = "-10px";
			document.getElementById('name').style.borderWidth = "0px";
			document.getElementById('name').value = "Type Here";
		}
		document.getElementById('round').value = kills;
	} else {
		document.getElementById('name').style.width = "0px";
		document.getElementById('name').style.height = "0px";
		document.getElementById('name').style.left = "-10px";
		document.getElementById('name').style.top = "-10px";
		document.getElementById('name').style.borderWidth = "0px";
		document.getElementById('name').value = "Type Here";
		textBox.width = 0;
		textBox.height = 0;
		textBox.style.borderWidth = "0px";
		wButton.height = 0;
		wButton.width = 0;
		aButton.height = 0;
		aButton.width = 0;
		sButton.height = 0;
		sButton.width = 0;
		dButton.height = 0;
		dButton.width = 0;
		oneButton.height = 0;
		oneButton.width = 0;
		mButton.height = 0;
		mButton.width = 0;
		spaceButton.height = 0;
		spaceButton.width = 0;		
		wButton.style.borderWidth = "0px";
		aButton.style.borderWidth = "0px";
		sButton.style.borderWidth = "0px";
		dButton.style.borderWidth = "0px";
		oneButton.style.borderWidth = "0px";
		mButton.style.borderWidth = "0px";
		spaceButton.style.borderWidth = "0px";
	}
}


function buttonCode(character) {
	if(character == ' ' && start != true && controls != false && ask != true) {
		ask = true;
	} else if((character == ' ' || character == 'w' || character == 's') && start != true && controls != false && ask != false && health > 0) {
		if(character == 'w') {
			askMenu = -1;
		} else if(character == 's') {
			askMenu = 1;
		} else if(character == ' ' && askMenu == 1) {
			ask = false;
			askMenu = -1;
		} else if(character == ' ' && askMenu == -1) {
			health = 0;
			controls = false;
			pause = -1;
			ask = false;
			askMenu = -1;
		}
	} else if((character == ' ' || character == 'w' || character == 's') && start != true && ask != false && health <= 0) {
		if(character == 'w') {
			askMenu = -1;
		} else if(character == 's') {
			askMenu = 1;
		} else if(character == ' ' && askMenu == 1) {
			ask = false;
			askMenu = -1;
		} else if(character == ' ' && askMenu == -1) {
			location.reload();
		}
	} else if((character == ' ' || character == 'w' || character == 's') && mainScreen != false) {
		if(character == 'w') {
			mainScreenNum = 1;
		} else if(character == 's') {
			mainScreenNum = -1;
		} else if(character == ' ' && mainScreenNum == 1) {
			mainScreen = false;
		} else if(character == ' ' && mainScreenNum == -1) {
			location.replace("read_data.php");
		}
	} else if((character == ' ' || character == 'w' || character == 's') && health <= 0 && start != true && upload != true) {
		if(character == 'w') {
			quitMenu = 1;
		} else if(character == 's') {
			quitMenu = -1;
		} else if(character == ' ' && quitMenu == 1) {
			ask = true;
		} else if(character == ' ' && quitMenu == -1) {
			upload = true;
		}
	} else if(character != ' ' && (character == 'w' || character == 'a' || character == 's' || character == 'd') && pause != 1 && start != true && health > 0) {
		if(character == 'a' && ((playerX - xOffset) * gridWidth) > 0 && (boardValues[playerY][playerX - 1] != 1)) {
			playerX-=1; 
			playerDir = 1;
		} else if(character == 'a' && ((playerX - xOffset) * gridWidth) == 0 && (boardValues[playerY][playerX - 1] != 1)) { 
			xOffset-=15; 
			playerX-=1;
			playerDir = 1;
		} else if(character == 'd' && ((playerX - xOffset) * gridWidth) < (boardHeight - gridWidth) && (boardValues[playerY][playerX + 1] != 1)) {
			playerX+=1; 
			playerDir = 2;
		} else if(character == 'd' && ((playerX - xOffset) * gridWidth) == (boardHeight - gridWidth) && (boardValues[playerY][playerX + 1] != 1)) { 
			xOffset+=15; 
			playerX+=1;
			playerDir = 2;
		} else if(character == 'w' && ((playerY - yOffset) * gridWidth) > 0 && (boardValues[playerY - 1][playerX] != 1)) {
			playerY-=1; 
			playerDir = 3;
		} else if(character == 'w' && ((playerY - yOffset) * gridWidth) == 0 && (boardValues[playerY - 1][playerX] !=1)) { 
			yOffset-=15; 
			playerY-=1;
			playerDir = 3;
		} else if(character == 's' && ((playerY - yOffset) * gridWidth) < (boardHeight - gridWidth) && (boardValues[playerY + 1][playerX] != 1)) {
			playerY+=1; 
			playerDir = 4;
		} else if(character == 's' && ((playerY - yOffset) * gridWidth) == (boardHeight - gridWidth) && (boardValues[playerY + 1][playerX] != 1)) {
			yOffset+=15; 
			playerY+=1;
			playerDir = 4;
		}
		if(boardValues[playerY][playerX] != 2) {
			playerRoom = checkRoom(playerX, playerY);
		}
	} else if(shoot != false && character == ' ' && pause != 1 && ((bulletType == -1 && rAmmo > 0) || (bulletType == 1 && eAmmo > 0)) && start != true && health > 0) {
		bullets.push(new Bullet(playerX, playerY, playerDir, bulletType, 1));
		if(bulletType == -1) {
			rAmmo--;
		} else if(bulletType == 1) {
			eAmmo--;
		}
		shoot = false;
		var actual = 12;
		var current = 0;
		shootTimer = setInterval(
			function() {
				if(current < actual && pause != 1 && !document.hidden && container.height < container.width) {
					current++;
				} else if(current >= actual && pause != 1 && !document.hidden && container.height < container.width) {
					shoot = true;
					clearInterval(shootTimer);
				}
			}, 1
		);
	} else if((character == ' ' || character == 'm') && controlsScreen != false && mainScreen != true) {
		if(controlsCount < 9 && character == ' ') {
			controlsCount+=1;
		} else if(controlsCount >= 9 && character == ' ') {
			controlsScreen = false;
		} else if(character == 'm') {
			controlsScreen = false;
		}
	} else if((character == 'w' || character == 's' || character == ' ') && start != false && pause != 1 && controlsScreen != true) {
		if(character == 'w') {
			gameMode = 1;
		} else if(character == 's') {
			gameMode = -1;
		} else if(character == ' ') {
			start = false;
			setGame();
			timeout();
		}
	} else if((character == 'w' || character == 's' || character == ' ') && pause == 1 && store != true && health > 0) {
		if(character == 'w') {
			menu = 1;
		} else if(character == 's') {
			menu = -1;
		} else if(character == ' ' && menu == 1) {
			store = true;
		} else if(character == ' ' && menu == -1) {
			controls = true;
		}
	} else if((character == 'w' || character == 's' || character == ' ') && pause == 1 && store != false && health > 0) {
		if(character == 'w') {
			storeMenu = 1;
		} else if(character == 's') {
			storeMenu = -1;
		} else if(character == ' ' && storeMenu == 1 && score >= 300) {
			score-=300;
			eAmmo+=15;
		} else if(character == ' ' && storeMenu == -1 && score >= 650 && powerHealth != true) {
			score-=650;
			powerHealth = true;
			var actual = 400;
			var current = 0;
			powerHealthTimer = setInterval(
				function() {
					if(current < actual && pause != 1 && !document.hidden && container.height < container.width) {
						current++;
					} else if(current >= actual && pause != 1 && !document.hidden && container.height < container.width) {
						powerHealth = false;
						clearInterval(powerHealthTimer);
					}
				}, 1
			);	
		}
	} else if(character == 'm' && start != true && health > 0) {
		pause *= -1;
		if(pause == 1) {
			eAmmoColor = "white";
			rAmmoColor = "white";
			killsColor = "white";
			healthColor = "white";
			scoreColor = "white";
		}
		store = false;
		controls = false;
		menu = 1;
		storeMenu = 1;
	} else if(character == '1' && pause != 1 && start != true && health > 0) {
		bulletType*=-1;
	}
}