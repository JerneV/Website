/*
APP NAME: jerneWolframTest

APPID: 4A78QU-7HH52P9R9Y

USAGE TYPE: Personal/Non-commercial Only

http://api.wolframalpha.com/v1/simple?appid=DEMO&i=What+airplanes+are+flying+overhead%3F
*/
var appID = "4A78QU-7HH52P9R9Y";
var input, button, search, searchURL, resultImage, result, url;



function setup() {

	input = createInput();
	input.position(0, 0);

	button = createButton('Search')
	button.position(180, 0);
	button.mousePressed(request);

}


function request(){
	console.log("Called");
	searchURL = "http://api.wolframalpha.com/v1/simple?appid=" + appID + "&i=" + encodeURIComponent(input.value().trim());//Make sure spaces are formatted in %20 and such
	resultImage = createImg(searchURL);
	image(resultImage, 0 , 50);
	createCanvas(resultImage.width, resultImage.height);
	console.log(searchURL);
}

/*function request(){
	var searchInput = encodeURIComponent(input.value().trim()); //Make sure spaces are formatted in %20 and such
	console.log(searchInput);
	var url = "http://api.wolframalpha.com/v2/query?appid=" + appID + "&format=plaintext&output=JSON&input=" + searchInput;
	wolramAPI = loadJSON(url);
	background(51);
	console.log(url);
}
*/
