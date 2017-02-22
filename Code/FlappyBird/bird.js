//Code Adapted from The Coding Train
function Bird() {
	this.y = height/2; //The bird only goes up and down, and it should stay in the center.
	this.x = 64; //Will be a fixed number.
	this.gravity = 0.6; //The gravity in game.
	this.velocity = 0; //Velo of the bird
	this.lift = 20;
	
	this.show = function(){ //Bird Function
		fill(255);
		ellipse(this.x, this.y, 16, 16);
	
	
	}		
	
	this.update = function(){
		this.velocity += this.gravity; //Gravity gives the bird velocity
		this.y += this.velocity; //Changes y position of bird.
		this.velocity *= 0.9;
		
		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
	
		if(this.y < 0){
			this.y = height;
			this.velocity = 0;
		}
	
	
	
	}
	
	this.up = function (){
		this.velocity += -this.lift;
	}
	
	
	
	
}