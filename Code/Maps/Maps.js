/*
Using the Mapbox.com api
Idea comes from The Coding Train

public token: pk.eyJ1IjoiamVybmV2IiwiYSI6ImNpemZ6a25xeDAwMDkyd3FuajVtY3p1aTYifQ.504z9nEKsHA-6RfojVnT8g

http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv  --earthquakes of the last 30 days, all of them

*/
var accessToken = "pk.eyJ1IjoiamVybmV2IiwiYSI6ImNpemZ6a25xeDAwMDkyd3FuajVtY3p1aTYifQ.504z9nEKsHA-6RfojVnT8g"; //Public access token for Mapbox
var w = 1024; //Width of the map
var h = 512; //Height of the map
var z = 1; //Zoom level
var mapImage, lon, lat, x, y;
var centerlat = 0;
var centerlon = 0;
var r; //Radius of the ellipse

function preload(){
  mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/streets-v9/static/0,0," + z + "/"  + w + "x" + h + "?access_token=" + accessToken ); //Lon, Lat, Zoom, size
  mapData = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'); //Get the earthquake data
  //use loadstrings
}

//https://en.wikipedia.org/wiki/Web_Mercator
function mercX(lon){
  lon = radians(lon); //We will get our lon in degrees = BAD
  x = (256/PI)*pow(2, z)*(lon + PI); //Calculate a X value from the given longitude
  return x;
}

function mercY(lat){
  lat = radians(lat);
  y = (256/PI)*pow(2,z)*(PI-log(tan((PI/4)+(lat/2)))); //Calculate a Y value from the given latitude
  return y;
}


function setup() {
  createCanvas(1024, 512);
  translate(width * 0.5, height *0.5);
  imageMode(CENTER);
  image(mapImage, 0 ,0);

  var centerX = mercX(centerlon);
  var centerY = mercY(centerlat);

  for(var i = 1; i < mapData.length; i++){
    var eData = mapData[i].split(/,/); //CSV file consists of comma seperated numbers; We will seperate those
    var lat = eData[1]; //latitude is the first variable
    var lon = eData[2]; //longitude is the second
    var mag = eData[4]; //Magnitude is a log scale --> we'll have to make it linear

    x = mercX(lon) - centerX;
    y = mercY(lat) - centerY;
    r = pow(10, mag); //Linearizing the log scale
    r = map(r, 0, 1000000, 0, 10); //Mapping the newly gotten number to something more usuable

    fill(0, 255, 0);
    ellipse(x, y, r, r);

  }

}
