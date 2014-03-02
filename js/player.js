var LOCATION = {
	TOP: 0,
	BOTTOM: 1
};

function createMultiway(location) {
	if (location === LOCATION.TOP) {
		return { A: 180, D: 0 };
	} else {
		return { LEFT_ARROW: 180, RIGHT_ARROW: 0 };
	}
}

function createAttr(location) {
	if (location === LOCATION.TOP) {
		return { x: window.innerWidth / 2, y: 20, w: 50, h: 50 };
	} else {
		return { x: window.innerWidth / 2, y: window.innerHeight - 75, w: 50, h: 50 };
	}
}

Crafty.c("Player", {
	movementSpeed: 8,
	lives: 1,
	score: 0,
	fireRate: 4,
	location: LOCATION.BOTTOM,
	ship:"ship_top",
	init: function() {
		
	},

	shoot: function() {
		Crafty.audio.play('laser');
		Crafty.e("Bullet").bullet(this.location, this.x, this.y, this.w, this.h, SHOOTER.PLAYER);
	},

	player: function(location) {
		this.location = location;

		if (this.location === LOCATION.BOTTOM) {
			this.ship = "ship_bottom";
		}

		this.requires("2D, DOM,"+ this.ship +", Color, Multiway, Keyboard, Collision")
		.multiway(8, 
			createMultiway(this.location))
		.attr(createAttr(this.location))
		//.color("red")
		.bind('Moved', function(from) {
            if(this.x + this.w > Crafty.viewport.width ||
                this.x + this.w < this.w){
                this.attr({
                    x:from.x
                });
            }
        })
        .bind("KeyDown", function(e) {
            if(e.keyCode === Crafty.keys.W && this.location === LOCATION.TOP){
                this.shoot();
            } else if (e.keyCode === Crafty.keys.UP_ARROW && this.location === LOCATION.BOTTOM) {
            	this.shoot();
            }
        });
	}
});
