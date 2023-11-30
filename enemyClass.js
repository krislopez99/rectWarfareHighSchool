var enemies = [];
var roomMovement = [
	[[0,0], [13,6], [13,6], [6,13], [6,13], [6,13], [13,6], [13,6], [6,13], [6,13], [6,13], [6,13]],
	[[13,6], [0,0], [46,6], [13,6], [18,11], [18,11], [41,11], [46,6], [13,6], [18,11], [13,6], [18,11]],
	[[46,6], [46,6], [0,0], [46,6], [46,6], [53,13], [46,6], [53,13], [46,6], [53,13], [46,6], [53,13]],
	[[6,13], [13,24], [6,13], [0,0], [13,24], [13,24], [13,24], [13,24], [6,35], [13,24], [6,35], [13,24]],
	[[18,11], [18,11], [18,11], [13,24], [0,0], [22,34], [22,34], [22,34], [13,24], [22,34], [22,34], [22,34]],
	[[22,34], [22,34], [37,34], [22,34], [22,34], [0,0], [37,34], [37,34], [22,46], [37,46], [22,56], [37,56]],
	[[41,11], [41,11], [41,11], [37,34], [37,34], [37,34], [0,0], [46,24], [37,34], [37,34], [37,34], [37,34]],
	[[53,13], [53,13], [53,13], [46,24], [46,24], [46,24], [46,24], [0,0], [46,24], [53,35], [46,24], [53,35]],
	[[6,35], [22,46], [22,46], [6,35], [6,35], [22,46], [22,46], [22,46], [0,0], [22,46], [10,50], [22,46]],
	[[37,46], [53,35], [53,35], [37,46], [37,46], [37,46], [53,35], [53,35], [37,46], [0,0], [37,46], [49,50]],
	[[10,50], [22,56], [22,56], [10,50], [10,50], [22,56], [22,56], [22,56], [10,50], [22,56], [0,0], [22,56]],
	[[37,56], [37,56], [49,50], [37,56], [37,56], [37,56], [37,56], [49,50], [37,56], [49,50], [37,56], [0,0]]
];


function Enemy() {
	this.xpos = Math.ceil(Math.random() * (boardValues[0].length - 1));
	this.ypos = Math.ceil(Math.random() * (boardValues[0].length - 1));
	this.id = Math.floor((Math.random() * boardValues[0].length) + 1);
	while(boardValues[this.ypos][this.xpos] != 0 || checkRoom(this.xpos, this.ypos) == playerRoom) {
		this.xpos = Math.ceil(Math.random() * (boardValues[0].length - 1));
		this.ypos = Math.ceil(Math.random() * (boardValues[0].length - 1));
	}
	this.playerInteract = false;
	if(gameMode == 1) {
		this.bulletCount = 1;
	} else {
		this.bulletCount = 2;
	}
	this.enemyRoom = checkRoom(this.xpos, this.ypos);
	this.newRoom = Math.ceil(Math.random() * 12);
	this.isActive = true;
	this.enemyDir = 1;
	this.attack = true;
	this.wait;
}
Enemy.prototype.draw = function() {
	if(this.xpos != playerX || this.ypos != playerY) {
		board.fillStyle = "white";
		board.fillRect((this.xpos - xOffset) * gridWidth,(this.ypos - yOffset) * gridWidth, gridWidth, gridWidth);
		board.fillStyle = "red";
		board.fillRect(((this.xpos - xOffset) * gridWidth) + (gridWidth/4),((this.ypos - yOffset) * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
	} else if(color == -1 && pause == -1 && powerHealth != true){
		board.fillStyle = "#4EE2EC";
		board.fillRect((this.xpos - xOffset) * gridWidth,(this.ypos - yOffset) * gridWidth, gridWidth, gridWidth);
		board.globalAlpha = 0.2;
		board.fillStyle = "#4EE2EC";
		board.fillRect(0, 0, boardHeight, boardHeight);
		board.globalAlpha = 1;
	} else if(color == 1 && pause == -1 && powerHealth != true) {
		board.fillStyle = "red";
		board.fillRect((this.xpos - xOffset) * gridWidth,(this.ypos - yOffset) * gridWidth, gridWidth, gridWidth);
		board.globalAlpha = 0.2;
		board.fillStyle = "red";
		board.fillRect(0, 0, boardHeight, boardHeight);
		board.globalAlpha = 1;
	} else if(this.xpos == playerX && this.ypos == playerY && powerHealth != false) {
		this.isActive = false;
		removeEnemy(this.id);
	} else {
		board.fillStyle = "#4EE2EC";
		board.fillRect((this.xpos - xOffset) * gridWidth,(this.ypos - yOffset) * gridWidth, gridWidth, gridWidth);
	}
}
Enemy.prototype.screenMovement = function() {
	if(this.enemyRoom == playerRoom) {
		if(this.xpos > playerX && boardValues[this.ypos][this.xpos - 1] != 1) {
			this.xpos--;
			clearInterval(this.wait);
			this.attack = true;
			this.enemyDir = 1;
		} else if(this.xpos < playerX && boardValues[this.ypos][this.xpos + 1] != 1) {
			this.xpos++;
			clearInterval(this.wait); 
			this.attack = true;
			this.enemyDir = 2;
		} else if(this.ypos > playerY && boardValues[this.ypos - 1][this.xpos] != 1) {
			this.ypos--;
			clearInterval(this.wait);
			this.attack = true;
			this.enemyDir = 3;
		} else if(this.ypos < playerY && boardValues[this.ypos + 1][this.xpos] != 1) {
			this.ypos++;
			clearInterval(this.wait);
			this.attack = true;
			this.enemyDir = 4;
		} else if(this.ypos == playerY && this.xpos == playerX && this.attack != false && container.height < container.width) {
			this.attack = false;
			if(gameMode == 1 && powerHealth != true) {
				health--;
			} else if(gameMode == -1 && powerHealth != true) {
				health-=2;
			}
			this.wait = setInterval(
				function() {
					if(pause != 1 && !document.hidden && container.height < container.width && health > 0) {
						if(gameMode == 1 && powerHealth != true) {
							health--;
						} else if(gameMode == -1 && powerHealth != true) {
							health-=2;
						}
						clearInterval(this.wait);
						this.attack = true;
					}
				}, 350
			);
		}
		if(((this.xpos == playerX && (this.enemyDir == 3 || this.enemyDir == 4)) || (this.ypos == playerY && (this.enemyDir == 1 || this.enemyDir == 2))) && Math.ceil(Math.random() * 18) == 2 && this.bulletCount > 0) {
			bullets.push(new Bullet(this.xpos, this.ypos, this.enemyDir, -1, 2));
			this.bulletCount--;
		}
		this.playerInteract = true;
		this.newRoom = playerRoom;
	} else if(this.enemyRoom != this.newRoom) {
		if((this.xpos > roomMovement[this.enemyRoom - 1][this.newRoom - 1][0] && boardValues[this.ypos][this.xpos - 1] == 0) || (boardValues[this.ypos][this.xpos] == 2 && this.enemyDir == 1) || (this.xpos - 1 == roomMovement[this.enemyRoom - 1][this.newRoom - 1][0] && this.ypos == roomMovement[this.enemyRoom - 1][this.newRoom - 1][1])) {
			this.xpos--;
			this.enemyDir = 1;
		} else if((this.xpos < roomMovement[this.enemyRoom - 1][this.newRoom - 1][0] && boardValues[this.ypos][this.xpos + 1] == 0) || (boardValues[this.ypos][this.xpos] == 2 && this.enemyDir == 2) || (this.xpos + 1 == roomMovement[this.enemyRoom - 1][this.newRoom - 1][0] && this.ypos == roomMovement[this.enemyRoom - 1][this.newRoom - 1][1])) {
			this.xpos++;
			this.enemyDir = 2;
		} else if((this.ypos > roomMovement[this.enemyRoom - 1][this.newRoom - 1][1] && boardValues[this.ypos - 1][this.xpos] == 0) || (boardValues[this.ypos][this.xpos] == 2 && this.enemyDir == 3) || (this.xpos == roomMovement[this.enemyRoom - 1][this.newRoom - 1][0] && this.ypos - 1 == roomMovement[this.enemyRoom - 1][this.newRoom - 1][1])) {
			this.ypos--;
			this.enemyDir = 3;
		} else if((this.ypos < roomMovement[this.enemyRoom - 1][this.newRoom - 1][1] && boardValues[this.ypos + 1][this.xpos] == 0) || (boardValues[this.ypos][this.xpos] == 2 && this.enemyDir == 4) || (this.xpos == roomMovement[this.enemyRoom - 1][this.newRoom - 1][0] && this.ypos + 1 == roomMovement[this.enemyRoom - 1][this.newRoom - 1][1])) {
			this.ypos++;
			this.enemyDir = 4;
		}
	} else if(this.enemyRoom == this.newRoom && this.playerInteract != true) {
		this.newRoom = Math.ceil(Math.random() * 12);
	} else if(this.enemyRoom == this.newRoom && this.playerInteract != false) {
		this.newRoom = playerRoom;
	}
	if(boardValues[this.ypos][this.xpos] == 0) {
		this.enemyRoom = checkRoom(this.xpos, this.ypos);
	}
}
function removeEnemy(id) {
	for(var a = 0; a < enemies.length; a++) {
		var enemy = enemies[a];
		if(enemy.isActive != true && enemy.id == id) {
			clearInterval(enemy.wait);
			enemies.splice(a, 1);
			if(health > 0) {
				kills++;
				score+=15;
			}
		}
	}
}