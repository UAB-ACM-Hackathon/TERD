Game = {


	menu: function () {
		Crafty.init(window.innerWidth, window.innerHeight);
		Crafty.canvas.init();

		Crafty.background("url('images/background.gif')");
		var answerText = Crafty.e("2D, DOM, Text, Mouse");
		Crafty.sprite(5, "images/menu_sprites.jpg", {
    		// menu scene buttons
    		startBtn : [ 0, 0, 74, 22 ],
    		normalBtn : [ 0, 22, 74, 22 ],
		});

		varstartButton = Crafty.e("2D, DOM, startBtn").attr({
    		x : 455,
    		y : 225
		});
	},

	start: function () {
		
		Crafty.init(window.innerWidth, window.innerHeight);
		Crafty.background("url('images/background.gif')");

		Crafty.load(['sounds/laser1.ogg']);
		Crafty.audio.add({
        		laser: ['sounds/laser1.ogg']
		});


		var player_top = Crafty.e("Player").player(LOCATION.TOP);
		var player_bottom = Crafty.e("Player").player(LOCATION.BOTTOM);

		var enemy_rows = 4;
		var enemy_colums = 6;

		for (var rows = enemy_rows; rows > 0; rows--) {

			for (var colums = enemy_colums; colums > 0; colums--) {

				Crafty.e("Enemy").enemy((window.innerWidth/2-75*colums)+75/2 -20, (window.innerHeight/2-30*rows), LOCATION.BOTTOM, 2);
				Crafty.e("Enemy").enemy((window.innerWidth/2+75*colums)-75/2 -20, (window.innerHeight/2-30*rows), LOCATION.BOTTOM, 2);
			}
		}

		for (var rows = enemy_rows; rows > 0; rows--) {

			for (var colums = enemy_colums; colums > 0; colums--) {
				Crafty.e("Enemy").enemy((window.innerWidth/2-75*colums)+75/2 -20, (window.innerHeight/2+30*rows), LOCATION.TOP, 2);
				Crafty.e("Enemy").enemy((window.innerWidth/2+75*colums)-75/2 -20, (window.innerHeight/2+30*rows), LOCATION.TOP, 2);
			}
		}
	}

	
}
