Crafty.c("Enemy", {

	badship:"badship_top",

	location : 0,

	init: function() {

	},

	enemy: function(x_coord, y_coord, location, speed) {

		this.location = location;

		if (this.location === LOCATION.TOP) {
			this.badship = "badship_bottom";
		}

		var direction = 1;

		if (location === LOCATION.TOP) {
			direction = -direction;
		} 

		var orig_x = x_coord;
		var orig_y = y_coord;

		this.requires("2D, DOM,"+ this.badship +", Color, Collision")
		.bind("EnterFrame", function() {

			if (this.x < (orig_x - 150) || this.x > (orig_x + 150)) {
				direction *= -1;
				this.y += (location === LOCATION.BOTTOM) ? -10 : 10;
			}
			this.x-=speed*direction;

			if (Math.floor((Math.random()*5000)+1) > 4999) {
				this.shoot();
			}
			
		})
		.onHit("Player", function(ent) {
			this.destroy();
			if (ent[0].obj.location === LOCATION.TOP) {
                                window.location = "bottom_winner" + ".html";
                        } else {
                                window.location = "top_winner" + ".html";
                        }
			ent[0].obj.destroy();
		})
		//.color("blue")
		.attr({
			w: 50,
			h: 50,
			x: x_coord,
			y: y_coord
		});
	},

	shoot: function() {
		Crafty.e("Bullet").bullet(this.location===0?1:0, this.x, this.y, this.w, this.h, SHOOTER.ENEMY);
	}
});
