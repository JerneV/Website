//Code Adapted from The Coding Train
var bird = new Bird();
var hit = false; 
var hit2 = false;


function Pipe() {
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.speed = 3;
	this.highlight = false;
	var maxTopHeight = random((height/2)-100, (height/2)-20);
	var maxBottomHeight = random((height/2)+20,(height/2)+100);
	
	this.show = function(){
		fill(255);
		if(this.highlight){
			fill(255, 0, 0);
		}
		
		rect(this.x, 0, this.w, maxTopHeight);
		//rect(this.x, height-this.bottom, this.w, this.bottom);
		rect(this.x, maxBottomHeight, this.w, maxBottomHeight);
	}
	
	this.update = function(){
		this.x -= this.speed;
		
		
	}
	
	this.offScreen = function() {
		if (this.x < -this.w) {
			return true;
    } else {
		return false;
    }
  }
	
	this.hits = function(bird) {
		updateHit();
		/**if (bird.y < this.top || bird.y > height - this.bottom){
			if(bird.x > this.x && bird.x < this.x + this.w){
			this.highlight = true; //Make the pipe red
			return true;
			}
		}
		this.highlight = false;
		return false;**/
			
	}
	
var updateHit = function(){
	hit = collideRectCircle(this.x, 0, this.w, maxTopHeight, bird.x, bird.y, 16);
	hit2 = collideRectCircle(this.x, maxBottomHeight, this.w, maxBottomHeight, bird.x, bird.y, 16);
	console.log("Top Pipe: " + hit + " Bottom Pipe: " + hit2);
	
}



}