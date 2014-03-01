Game = {
	start: function () {
		Crafty.init(window.innerWidth, 
			window.innerHeight);

	Crafty.background('black');

	//Aircraft
	Crafty.e("Paddle, 2D, DOM, Color, Multiway")
    	.color('rgb(255,0,0)')
    	.attr({ x: window.innerWidth/2, y: 20, w: 75, h: 15 })
    	.multiway(10, { A: 180, D: 0 });

	Crafty.e("Paddle, 2D, DOM, Color, Multiway")
    	.color('rgb(0,0,255)')
    	.attr({ x: window.innerWidth/2, y: window.innerHeight-50, w: 75, h: 15 })
    	.multiway(10, { LEFT_ARROW: 180, RIGHT_ARROW: 0 })
    	.bind("KeyDown",function(frame){
    		if(frame.keyCode === Crafty.keys.SPACE){
                this.shoot();
            } 
            
        });

    

	}


}