

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
context.strokeStyle = "#ff0000"



function Ball(startX, startY, radius){
	this.x = startX;
	this.y = startY;
	this.radius = radius;
	this.xDirection = 1;
	this.yDirection = 1;
	this.mass = this.radius / 2;
	this.veloX = 0;
	this.veloY = 0;
	this.bounce = 0.6;
	this.gravity = 0.05;
	this.gravitySpeed = 0;

	this.hitBottom = function(){
		var rockBottom = 500 - this.radius
		var tipTop = this.radius
		if (this.y > rockBottom){
			this.y = rockBottom;
			this.gravitySpeed = -(this.gravitySpeed * this.bounce);
		}else if (this.y < tipTop){
			this.y = tipTop;
			this.veloY = -this.veloY
		}
	}
}



var ballArray = [new Ball(200,200,50)];
var chaosBool = false;
var chaosTimer = 0


function checkBox(ball, array){
	for (let i = 0; i < array.length; i++){
		var distX = ball.x - array[i].x;
		var distY = ball.y - array[i].y;
		var distance = Math.sqrt((distX * distX) + (distY * distY));
		if (ball == array[i]) {
			return
		}else if (distance <= ball.radius + array[i].radius) {
			
		}		
	}
}

function checkWall(ball){
	if ((ball.x > 500 - ball.radius) || (ball.x <ball.radius)){
		ball.veloX = -ball.veloX;
	}
	if ((ball.y >= 500 - ball.radius) || ball.y == ball.radius){
		ball.veloY = -ball.veloY;
	}
}

function moveBall(ball){
	ball.gravitySpeed += ball.gravity;
	ball.x += ball.veloX;
	ball.y += ball.veloY + ball.gravitySpeed;
	ball.hitBottom();
}

function changeBool(){
	chaosBool = true;
}

function chaos(bool, ball){
	if (bool){
		ball.veloY= -5;
		chaosTimer++;
	}
	if (chaosTimer == 20){
		ball.veloY = 0;
		bool = false;
		chaosTimer = 0;
	}
}


function drawBall(array, bool){
	context.beginPath();
	for (i = 0; i < array.length; i++){
		context.fillStyle = "rgb(255,255,255)";
		context.arc(array[i].x,array[i].y,array[i].radius,0,2*Math.PI);
		context.shadowBlur = 40;
		context.shadowColor = "#ffeead";
		context.clearRect(0,0,500,500);
		context.closePath();
		context.fill();
		chaos(bool, array[i]);
		checkWall(array[i]);
		checkBox(array[i],array);
		moveBall(array[i]);
	}
}

function addBall(){
	var randomCoordinate = Math.ceil((Math.random()*400) +51)
	var randomRadius = Math.ceil(Math.random()*50)
	ballArray.push(new Ball(randomCoordinate,randomCoordinate,randomRadius));
}

// function addBall(){
// 	ballArray.push({x: 100, y: 100, radius: 20, xDirection: 1, yDirection: 1});
// 	console.log(ballArray)
// }


var ballin = setInterval(drawBall, 20, ballArray, chaosBool);

// canvas.addEventListener("click", function(event){
// 	// console.log(event.x, event.y)
// 	for (let i = 0; i < ballArray.length; i++){
// 		if (Math.abs((event.x - ballArray[i].x) - (event.y - ballArray[i].y)) <= ballArray[i].radius){
// 			console.log("HIT!")
// 		}
// 	}			
// });


// ball.xDirection = - ball.xDirection;
// 			ball.yDirection = - ball.yDirection;
// 			array[i].xDirection = - array[i].xDirection;
// 			array[i].yDirection = - array[i].yDirection;



// x: 200,
// 	y: 200, 
// 	radius: 50, 
// 	xDirection: 1, 
// 	yDirection: 1, 
// 	mass: radius/2, 
// 	veloX: 4, 
// 	veloY: 2


// {
// 		x: randomCoordinate, 
// 		y: randomCoordinate, 
// 		radius: randomRadius, 
// 		xDirection: 1, 
// 		yDirection: 1,
// 		mass: radius/2,
// 		veloX: 4,
// 		veloY: 2,
// 	}
// 


// else if (distance <= ball.radius + array[i].radius) {
// 			var newVelX1 = (ball.veloX * (ball.mass - array[i].mass) + (2 * array[i].mass * array[i].veloX)) / (ball.mass + array[i].mass);
// 			var newVelY1 = (ball.veloY * (ball.mass - array[i].mass) + (2 * array[i].mass * array[i].veloY)) / (ball.mass + array[i].mass);
// 			var newVelX2 = (array[i].veloX * (array[i].mass - ball.mass) + (2 * ball.mass * ball.veloX)) / (ball.mass + array[i].mass);
// 			var newVelY2 = (array[i].veloY * (array[i].mass - ball.mass) + (2 * ball.mass * ball.veloY)) / (ball.mass + array[i].mass);
// 			console.log(newVelX1)
// 			ball.veloX = newVelX1;
// 			ball.veloY = newVelY1;
// 			array[i].veloX = newVelX2;
// 			array[i].veloY = newVelY2
// 		}

