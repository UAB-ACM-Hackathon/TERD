Crafty.c("Enemy", {

	init: function() {

	},

	enemy: function(x_coord, y_coord, location, speed) {

		/*if (location === LOCATION.BOTTOM) {
			this.direction = -direction;
		}*/

		var orig_x = x_coord;
		var orig_y = y_coord;
		var direction = 1;

		this.requires("Color, 2D, DOM, Collision")
		.bind("EnterFrame", function() {

			if (this.x < (orig_x - 50) || this.x > (orig_x + 50)) {
				direction *= -1;
			}
			this.x-=speed*direction;
			
		})
		.color("blue")
		.attr({
			w: 40,
			h: 15,
			x: x_coord,
			y: y_coord
		});
	}
});