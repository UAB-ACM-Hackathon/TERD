Game = {
	start: function () {
		Crafty.init(window.innerWidth, window.innerHeight);

		Crafty.background('black');

		var player_top = Crafty.e("Player").player(LOCATION.TOP);
		var player_bottom = Crafty.e("Player").player(LOCATION.BOTTOM);
	}
}
