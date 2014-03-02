var BULLET_MOVEMENT_SPEED = -8;

var SHOOTER = {
	ENEMY: 0,
	PLAYER: 1
};

Crafty.c("Bullet", {

	shot:"shot",
	init: function() {

	},

	bullet: function(location, ship_x, ship_y, ship_w, ship_h, shooter) {
		if (location === LOCATION.BOTTOM) {
			ship_y += 40;
			this.bullet_movement_speed = BULLET_MOVEMENT_SPEED;
		} else {
			this.bullet_movement_speed = -BULLET_MOVEMENT_SPEED;
		}

		this.requires("Color,"+this.shot+", 2D, DOM, Collision")
		.bind("EnterFrame", function() {
			this.y += this.bullet_movement_speed;
			if (this.y > window.innerHeight || this.y < 0) {
				this.destroy();
			}
		})
		.onHit("Player", function(ent) {
			this.destroy();
			Crafty.defineScene("win", function() {
			Crafty.background("url('images/background.gif')");
			Crafty.e("2D, DOM, Text")
			  .attr({ w: 100, h: 20, x: 150, y: 120 })
			  .text("WINNER!\n" + ((ent[0].obj.location === LOCATION.TOP) ? "BOTTOM" : "TOP"))
			  .css({ "text-align": "center"})
			  .textColor("#00FF00");
			});
			Crafty.scene("win");
			ent[0].obj.destroy();
		})
		.onHit("Enemy", function(ent) {
			if (shooter !== SHOOTER.ENEMY) {
				this.destroy();
				ent[0].obj.destroy();
			}
		})
		.onHit("Bullet", function(ent) {
			this.destroy();
			ent[0].obj.destroy();
		})
		//.color("green")
		.attr({
			w: 5,
			h: 13,
			x: ship_x + ship_w/2 - 10/2, //10 = bullet width. using this.w isnt working
			y: ship_y + (location === LOCATION.BOTTOM ? -ship_h : ship_h)
		});
	}
});