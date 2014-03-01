var LOCATION = {
	TOP: 0,
	BOTTOM: 1
};

var MOVEMENT_SPEED = 8;

function createMultiway(location) {
	if (location === LOCATION.TOP) {
		return { A: 180, D: 0 };
	} else {
		return { LEFT_ARROW: 180, RIGHT_ARROW: 0 };
	}
}

function createAttr(location) {
	if (location === LOCATION.TOP) {
		return { x: window.innerWidth / 2, y: 20, w: 75, h: 15 };
	} else {
		return { x: window.innerWidth / 2, y: window.innerHeight - 50, w: 75, h: 15 };
	}
}

Crafty.c("Player", {
	movementSpeed: MOVEMENT_SPEED,
	lives: 1,
	score: 0,
	fireRate: 4,
	location: LOCATION.BOTTOM,
	init: function() {
		
	},

	shoot: function() {
		var bullet = Crafty.e("Weapon");
		bullet.attr({
			y: this.y - this.h / 2 + bullet.h / 2
		});
	},

	player: function(location) {
		this.location = location;
		this.requires("2D, DOM, Color, Multiway, Keyboard, Collision")
		.multiway(this.movementSpeed, 
			createMultiway(this.location))
		.attr(createAttr(this.location))
		.color("red")
		.bind('Moved', function(from) {
            if(this.x + this.w > Crafty.viewport.width ||
                this.x + this.w < this.w){
                this.attr({
                    x:from.x
                });
            }
<<<<<<< HEAD
=======
          
        })
        .bind("KeyDown", function(e) {
            if(e.keyCode === Crafty.keys.W && this.location === LOCATION.TOP){
                console.log("top shoot");
            } else if (e.keyCode === Crafty.keys.UP_ARROW && this.location === LOCATION.BOTTOM) {
            	console.log("bottom shoot");
            }
>>>>>>> 35fd6e972984ddf0eca2c84bdcea8e762e233897
        });
        if (this.location === LOCATION.BOTTOM)
        	this.MOVEMENT_SPEED = -this.MOVEMENT_SPEED;
	}
});