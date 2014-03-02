Game = {
	start: function () {
		Crafty.init(window.innerWidth, window.innerHeight);

		Crafty.background('black');

		var player_top = Crafty.e("Player").player(LOCATION.TOP);
		var player_bottom = Crafty.e("Player").player(LOCATION.BOTTOM);

		var enemy_rows = 4;
		var enemy_colums = 8;

		for (var rows = enemy_rows; rows > 0; rows--) {

			for (var colums = enemy_colums; colums > 0; colums--) {

				Crafty.e("Enemy").enemy((window.innerWidth/2-75*colums)+75/2 -20, (window.innerHeight/2-30*rows)+15, LOCATION.BOTTOM, 2);
				Crafty.e("Enemy").enemy((window.innerWidth/2+75*colums)-75/2 -20, (window.innerHeight/2-30*rows)+15, LOCATION.BOTTOM, 2);
			}
		}

		for (var rows = enemy_rows; rows > 0; rows--) {

			for (var colums = enemy_colums; colums > 0; colums--) {
				Crafty.e("Enemy").enemy((window.innerWidth/2-75*colums)+75/2 -20, (window.innerHeight/2+30*rows)-15, LOCATION.TOP, 2);
				Crafty.e("Enemy").enemy((window.innerWidth/2+75*colums)-75/2 -20, (window.innerHeight/2+30*rows)-15, LOCATION.TOP, 2);
			}
		}
	}
}