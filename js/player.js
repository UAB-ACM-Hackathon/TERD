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
		return { x: window.innerWidth / 2, y: 20, w: 75, h: 15 };
	} else {
		return { x: window.innerWidth / 2, y: window.innerHeight - 50, w: 75, h: 15 };
	}
}

Crafty.c("Player", {
	movementSpeed: 8,
	lives: 1,
	score: 0,
	fireRate: 4,
	location: LOCATION.BOTTOM,
	init: function() {
		
	},

	player: function(location) {
		this.location = location;
		this.requires("2D, DOM, Color, Multiway, Keyboard, Collision")
		.multiway(this.movementSpeed, 
			createMultiway(this.location))
		.attr(createAttr(this.location))
		.color("red")
		.bind('Moved', function(from) {
            if(this.x+this.w > Crafty.viewport.width ||
                this.x+this.w < this.w){
                this.attr({
                    x:from.x
                });
            }
          
        });
	}
});