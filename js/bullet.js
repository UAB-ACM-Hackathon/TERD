Crafty.c("Bullet", {
	init: function() {
		this.requires("2D, DOM, Collision")
		.bind("EnterFrame", function() {
			if (this.y < -this.h ||
				this.y > Crafty.viewport.height + this.h) {
				this.destroy();
			}
		})
		.onHit("Bullet", function(ent) {
			this.destroy();
			ent[0].destroy();
		})
	}
});

Crafty.c("Weapon", {
	init: function() {
		this.requires("Bullet")
		.origin("center")
		.bind("EnterFrame", function() {
			this.y += MOVEMENT_SPEED
		})
	}
});