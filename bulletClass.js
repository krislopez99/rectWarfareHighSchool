var bullets = [];


function Bullet(xpos, ypos, dir, bulletType, playerType) {
	this.xpos = xpos;
	this.ypos = ypos;
	this.id = Math.floor((Math.random() * 1000) + 1);
	this.dir = dir;
	this.isActive = true;
	this.type = bulletType;
	this.playerType = playerType;
	this.wait = 0;
}
Bullet.prototype.draw = function() {
	if(this.isActive != false) {
		if(this.playerType == 2) {
			board.fillStyle = "red";
			board.fillRect(((this.xpos - xOffset) * gridWidth) + (gridWidth/4),((this.ypos - yOffset) * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
		} else {
			board.fillStyle = "#4EE2EC";
			board.fillRect(((this.xpos - xOffset) * gridWidth) + (gridWidth/4),((this.ypos - yOffset) * gridWidth) + (gridWidth/4), gridWidth/2, gridWidth/2);
		}
	} else if(this.type == 1 && this.isActive != true) {
		board.fillStyle = "red";
		board.fillRect(((this.xpos - 2) - xOffset) * gridWidth,((this.ypos - 2) - yOffset) * gridWidth, gridWidth * 5, gridWidth * 5);
		board.fillStyle = "#4EE2EC";
		board.fillRect(((this.xpos - 1) - xOffset) * gridWidth,((this.ypos - 1) - yOffset) * gridWidth, gridWidth * 3, gridWidth * 3);
		board.fillStyle = "white";
		board.fillRect((this.xpos - xOffset) * gridWidth,(this.ypos - yOffset) * gridWidth, gridWidth, gridWidth);
		if(this.wait > 7) {
			removeBullet(this.id);
		}
		this.wait++;
	}
}
Bullet.prototype.screenMovement = function() {
	this.checkCollision();
	if(this.dir == 1 && boardValues[this.ypos][this.xpos - 1] != 1 && this.isActive != false) {
		this.xpos-=1;
	} else if(this.dir == 2 && boardValues[this.ypos][this.xpos + 1] != 1 && this.isActive != false) {
		this.xpos+=1;
	} else if(this.dir == 3 && boardValues[this.ypos - 1][this.xpos] != 1 && this.isActive != false) {
		this.ypos-=1;
	} else if(this.dir == 4 && boardValues[this.ypos + 1][this.xpos] != 1 && this.isActive != false) {
		this.ypos+=1;
	} else {
		if(this.type == -1) {
			this.isActive = false;
			removeBullet(this.id);
		} else {
			for(var b = 0; b < enemies.length; b++) {
				var range = enemies[b];
				if(range.xpos > this.xpos - 3 && range.xpos < this.xpos + 3 && range.ypos > this.ypos - 3 && range.ypos < this.ypos + 3) {
					range.isActive = false;
					removeEnemy(range.id);
				}
			}
			this.isActive = false;
		}
	}
}
Bullet.prototype.checkCollision = function() {
	if(this.playerType == 1) {
		for(var a = 0; a < enemies.length; a++) {
			var enemy = enemies[a];
			if(this.xpos == enemy.xpos && this.ypos == enemy.ypos && this.type == -1) {
				this.isActive = false;
				enemy.isActive = false;
				removeBullet(this.id);
				removeEnemy(enemy.id);
			} else if(this.xpos == enemy.xpos && this.ypos == enemy.ypos && this.type == 1) {
				for(var b = 0; b < enemies.length; b++) {
					var range = enemies[b];
					if(range.xpos > this.xpos - 3 && range.xpos < this.xpos + 3 && range.ypos > this.ypos - 3 && range.ypos < this.ypos + 3) {
						range.isActive = false;
						removeEnemy(range.id);
					}
				}
				this.isActive = false;
			}
		}
	} else {
		if(this.xpos == playerX && this.ypos == playerY) {
			this.isActive = false;
			removeBullet(this.id);
			if(gameMode == 1 && powerHealth != true) {
				health-=5;
			} else if(gameMode == -1 && powerHealth != true) {
				health-=8;
			}
		}
	}
}
function removeBullet(id) {
	for(var a = 0; a < bullets.length; a++) {
		var bullet = bullets[a];
		if(bullet.isActive != true && bullet.id == id) {
			bullets.splice(a, 1);
		}
	}
}