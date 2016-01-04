var up = false
var down = false
var left = false
var right = false

var keydown = function(c){
	var key = c.keyCode
	switch(key){
		case 87://w
			up = true
			break
		case 83://s
			down = true
			break
		case 65://a
			left = true
			break	
		case 68://d
			right = true
			break
		case 32://space
			socket.emit('action', 'space', [mx,my])
			break		
		case 72:
			//socket.emit('help')
			alert("Welcome to HelloSquare!\nGoal of the game is to battle your friends in endless quadrilateral combat!\nCombine different abilities for MAXIMUM SYNERGY!\nRecommend Chrome. Zoom out to 50% (until the scroll bars dissapear).\n\nControls\nWASD to move.\nLeft click, right click, and space to use abilities.\nChange abilities with buttons on the right.\nSelect the ability then click the button to set it.\n\nInfo\nYou are the square with the border.\nYou have 10 maximum energy to use abilities (indicated by the color of your square).\nEnergy caps out at 10 and regenerates 1 per second.\nWhen your square is black your energy is zero and you have to wait to use any abilities.\nYou have 10 health points. These do not regenerate.\nWhen you are defeated your grave is marked with a gray tombstone square.\nYou will respawn in 10 seconds.\nPonder your defeat while you wait.\nPress 'o' for details on the abilities.\n\nHope you enjoy!\n-Abdulwahed Wahedi")
			break
		case 79:
			alert("\
			axe: in develpment\n\
			beam: projectiles:10 cost:3 size:10 speed:30 damage:3 effect:shoots 10 projectiles in rapid succession towards a target\n\
			bounce: stationary cost:1 size:20 effect:reflects projectiles and melee weapons\n\
			explode: projectile cost:1 size:20 speed:2 damage:20 effect:once collides the projectile will halt and expand in size for 300 ticks\n\
			freeze: projectile cost:2 size:80 speed:4 damage:0 effect:sets the speed of all objects it passes through to 0\n\
			gatling: projectiles:50 cost:3 size:10 speed:5 damage:4 effect:creates a gray square on mouse location, projectiles are launched from player toward the square until 50 shots have been fired \n\
			hulk: buff cost:20 effect: sets player health to 50, size to 80, and speed to 3, also sets a damage on collide to 50\n\
			invisible: buff cost:1 effect:renders player invisible for 7 seconds\n\
			kamehameha: projectile cost:3 size:0->? speed:30 damage:20 effect:delays before firing, size increases once per tick, once size is 50 the projectile is lauched\n\
			lazer: melee:(squares in a line, length of screen) cost:5 size:0->? damage:100 effect:delays 1 second then increases size of each segment by 1 per tick for half a second before expiring\n\
			lion: minion cost:5 size:30 speed:2 damage:30 health:40\n\
			mine: stationary cost:1 size:20->? damage:20 effect:on collision expands in size for 300 ticks\n\
			nuke: stationary cost:4 size:0->? damage:100 effect:creates a green marker at any location, after 5 seconds the square will rapidly expand reaching a size of 600\n\
			portal: stationary cost:1 size:20 effect:on collision sets square to a random location, lasts 1000 ticks\n\
			rock: melee:(1 large sement) cost:2 size:70 damage:20 effect:rock has an infinite duration and blocks projectiles, on the second activation the rock is thrown and becomes a projectile with speed:3\n\
			shield: stationary cost:2 size:60 effect:creates a square around the player which blocks incoming damage, lasts 5 seconds or until the second activation \n\
			shoot: projectile cost:0 size:16 speed:6 damage:3\n\
			sprint: buff cost:2 effect:sets player speed to 3, after 1 second speed is player speed is set to 1 NOTE:spamming sprint is inneffective if you sprint a second time before the duration is up the speed will be overwritten to 1 regardless\n\\n\
			sword: melee:(6 squares in a line) cost:2 size:20 damage:20 effect:blocks projectiles, lasts half a second\n\
			zombie: minion cost:1 size:10 speed:1 damage:20 health:20\n\
			")
			break
		default:
	}
}

var keyup = function(c){
	var key = c.keyCode
	switch(key){
		case 87://w
			up = false
			break
		case 83://s
			down = false
			break
		case 65://a
			left = false
			break	
		case 68://d
			right = false
			break		
		default:
	}
}

