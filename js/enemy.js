Crafty.c("Enemy", {

	direction : 1,
	orig_x : 1,
	orig_y : 1,

	init: function() {

	},

	enemy: function(x_coord, y_coord, location, speed) {

		/*if (location === LOCATION.BOTTOM) {
			this.direction = -direction;
		}*/

		orig_x = x_coord;
		orig_y = y_coord;

		this.requires("Color, 2D, DOM, Collision")
		.bind("EnterFrame", function() {

			this.x-=speed
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