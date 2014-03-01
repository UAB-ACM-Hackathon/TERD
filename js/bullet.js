var BULLET_MOVEMENT_SPEED = -8;

Crafty.c("Bullet", {
	init: function() {

	},

	bullet: function(location, ship_x, ship_y, ship_w, ship_h) {
		if (location === LOCATION.BOTTOM) {
			this.bullet_movement_speed = BULLET_MOVEMENT_SPEED;
		} else {
			this.bullet_movement_speed = -BULLET_MOVEMENT_SPEED;
		}

		this.requires("Color, 2D, DOM, Collision")
		.bind("EnterFrame", function() {
			this.y += this.bullet_movement_speed;
			if (this.y > window.innerHeight || this.y < 0) {
				this.destroy();
				console.log("des");
			}
		})
		.onHit("Player", function(ent) {
			this.destroy();
			ent[0].obj.destroy();
		})
		.onHit("Enemy", function(ent) {
			this.destroy();
			ent[0].obj.destroy();
		})
		.color("green")
		.attr({
			w: 10,
			h: 10,
			x: ship_x + ship_w/2 - 10/2, //10 = bullet width. using this.w isnt working
			y: ship_y + (location === LOCATION.BOTTOM ? -ship_h : ship_h)
		});
	}
});