//Code Adapted from The Coding Train
var bird;
var pipes = [];
function setup(){
	createCanvas(600,800);
		bird = new Bird();
	pipes.push(new Pipe());
}


function draw(){
	background(0);
	
	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();
	 //if (pipes[i].hits(bird)){
		//console.log("HIT");
	 //}
	 
	 if(pipes[i].offScreen()){
		 pipes.splice(i, 1); //Get rid of the pipe, so we only have 3 pipes
	 }
	
	
	}
	
	bird.update();
	bird.show();
	
	if(frameCount % 100 == 0){ //Every 100 frames we will make a new pipe
		pipes.push(new Pipe());
	}
	
	
	 
}

function keyPressed(){
	if (key == ' '){ //Detect if spacebar is pressed.
		bird.up();
	}
}

function touchStarted() {
	bird.up();

}

