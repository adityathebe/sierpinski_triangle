var start;
var ndots = 3;
var Radius = 2;
var slider;
var iteration;
var fRate;

function setup() {
	frameRate(25);
	canvas = createCanvas(800, 480);
	canvas.position(10, 10);
	background(51);	
	fill(255);
	noStroke();
	game = new main()
	game.init();
  	slider = createSlider(1, 60, 20, 1);
 	slider.position(width - 250, height + 20);
 	slider.style('width', '200px');
 	iteration = createElement('h3');
 	iteration.position(width + 20, height);
 	fRate = createElement('h4');
 	fRate.position(width + 20, height + 25);
}

function draw() {
	frameRate(slider.value());
	game.start();
}

function main() {
	var posX = [];
	var posY = [];
	var midX = random(0, width);
	var midY = random(0, height);
	var count = 3;

	this.init = function() {
			// First circle
			posX.push(width/2);
			posY.push(height/4);

			// Second Circle
			posX.push(width/6);
			posY.push(height/1.2);

			// Third Circle
			posX.push(width/1.2);
			posY.push(height/1.2);
		
		for (var i = 0; i < ndots; i++) {
			fill('#c0392b');
			ellipse(posX[i], posY[i], Radius * 3, Radius * 3);
		}
		console.log('rolled');			
		fill(255);
	}

	var paint = function(j) {
		var midX_distance = Math.abs(midX-posX[j]) / 2;
		var midY_distance = Math.abs(midY-posY[j]) / 2;
		if(midX > posX[j]) {
			midX = midX-midX_distance;
			if(midY > posY[j]) {
				midY = midY-midY_distance;
				ellipse(midX, midY, Radius, Radius);
			} else {
				midY = midY+midY_distance;
				ellipse(midX, midY, Radius, Radius);
			}
		} else {
			midX = midX+midX_distance;
			if(midY > posY[j]) {
				midY = midY-midY_distance;
				ellipse(midX, midY, Radius, Radius);
			} else {
				midY = midY+midY_distance;
				ellipse(midX, midY, Radius, Radius);
			}
		}
	}

	this.start = function() {
		var die = Math.floor((Math.random() * ndots) + 1);
		paint(die-1);
		count ++;
		iteration.html('Dots = ' + count);
		fRate.html('Frame Rate = ' + slider.value() + " fps");
	}
}

