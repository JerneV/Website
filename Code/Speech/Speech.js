//http://ability.nyu.edu/p5.js-speech/

var input, button, speedSlider; //Vars for the input and the button when inputting



function setup(){
	createCanvas(700, 700);
	background(random(0, 255), random(0, 255), random(0,255));

	input = createInput("Say something!"); //Creating the input field
	input.position(280, 350);

	button = createButton('Enter'); //Enter button. 
	/* TODO Make it work with enter */
  	button.position(450, 350);
  	button.mousePressed(enter);

  	speedSlider = createSlider(0.1 , 2 , 1, 0.1); //create the slider for the speed of the text
  	speedSlider.position(280, 400);
  	text("Speed", 410 ,390);

  	pitchSlider = createSlider(0.01 , 2 , 1, 0.1); //create the slider for the speed of the text
  	pitchSlider.position(280, 430);
  	text("Pitch", 410 , 420);

  	

}

function enter(){
		//var speed = speedSlider.value(); //Get speed
		//background(random(0, 255), random(0, 255), random(0,255));
		var voice = new p5.Speech(); // Initialize speech
		voice.cancel(); //Cancel previous text
		voice.setLang('en-US'); //USA for laif
		voice.setRate(speedSlider.value());
		voice.setPitch(pitchSlider.value())

		
		voice.speak(input.value()); // Say whatever is in the box
		 

}


