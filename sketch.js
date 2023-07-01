// point is a data structure
// point.x: mouse X pos
// point.y: mouse Y pos

var points; // points is an array of point

function preload() {
 	// points = loadJSON("drawings.json", function(){
 	// println("loading json successful");
 	// }, function(){
 	// println("loading json failed");
 	// }); 
}

function setup() { 
  createCanvas(windowWidth, 800);
  stroke(255, 255, 255);
  strokeWeight(1);
  noFill();
  
  // // declare the points as an array
points = [];
} 

// redraw the drawing
function draw() { 
  // clear the background
  background(0, 0, 0);
  
  // draw all the points
  beginShape();
  for(var i in points) {
    // grab the point by index
    var one_point = points[i];
    curveVertex(one_point.x, one_point.y);
  }
	endShape();
}

// save the drawing 
function mouseDragged(){
  // create an object as empty point
  var one_point = {};
  one_point.x = mouseX;
  one_point.y = mouseY;
  
  // add the point to the array
  points.push(one_point);
}

function keyPressed() {
	if(key === 's' || key ==='S'){
    println("save the drawing here");
    saveJSON(points, "drawings.json");
  }
}
