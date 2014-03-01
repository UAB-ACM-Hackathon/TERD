Game = {
	start: function () {
		Crafty.init(window.innerWidth, window.innerHeight);

		Crafty.background('black');

		var player_top = Crafty.e("Player").player(LOCATION.TOP);
		var player_bottom = Crafty.e("Player").player(LOCATION.BOTTOM);

		var enemy_rows;
		var enemy_colums;

		//Crafty.e("Enemy").enemy(window.innerWidth / 2, window.innerHeight / 2);

		for (enemy_rows = 2; enemy_rows > 0; enemy_rows--) {

			for (enemy_colums = 5; enemy_colums > 0; enemy_colums--) {
				Crafty.e("Enemy").enemy(window.innerWidth/2-75*enemy_colums, window.innerHeight/2-75*enemy_rows, 1, 5);
				Crafty.e("Enemy").enemy(window.innerWidth/2+75*enemy_colums, window.innerHeight/2-75*enemy_rows, 1, 5);
			}
		}

		for (enemy_rows = 2; enemy_rows > 0; enemy_rows--) {

			for (enemy_colums = 5; enemy_colums > 0; enemy_colums--) {
				Crafty.e("Enemy").enemy(window.innerWidth/2-75*enemy_colums, window.innerHeight/2+75*enemy_rows, 1, 5);
				Crafty.e("Enemy").enemy(window.innerWidth/2+75*enemy_colums, window.innerHeight/2+75*enemy_rows, 1, 5);
			}
		}
	}
}