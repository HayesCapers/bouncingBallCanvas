

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
context.strokeStyle = "#ff0000"

// draw a circle:
// context.beginPath()
// context.fillStyle = "#f6b2ff"
// context.arc(200,200,200,0*Math.PI,2*Math.PI);


var ballArray = [{x: 200, y: 200, radius: 50, xDirection: 1, yDirection: 1}]

function checkBox(ball, array){
	for (let i = 0; i < array.length; i++){
		var distX = ball.x - array[i].x;
		var distY = ball.y - array[i].y;
		var distance = Math.sqrt((distX * distX) + (distY * distY))
		if (ball == array[i]){
			return
		}else if (distance <= ball.radius + array[i].radius){
			ball.xDirection = - ball.xDirection;
			ball.yDirection = - ball.yDirection;
			array[i].xDirection = - array[i].xDirection;
			array[i].yDirection = - array[i].yDirection;
		}
	}
}

function drawBall(array){
	context.beginPath();
	for (i = 0; i < array.length; i++){
		context.fillStyle = "rgb(150,255,120)";
		context.arc(array[i].x,array[i].y,array[i].radius,0,2*Math.PI);
		context.clearRect(0,0,500,500);
		context.closePath();
		context.fill();
		if ((array[i].x > 500 - array[i].radius) || (array[i].x <array[i].radius)){
			array[i].xDirection = -array[i].xDirection;
		}
		if ((array[i].y > 500 - array[i].radius) || array[i].y < array[i].radius){
			array[i].yDirection = -array[i].yDirection;
		}
		array[i].x += 4 * array[i].xDirection;
		array[i].y += 2 * array[i].yDirection;
		checkBox(array[i],array)
	}
}

function addBall(){
	var randomCoordinate = Math.ceil((Math.random()*400) +51)
	var randomRadius = Math.ceil(Math.random()*50)
	ballArray.push({
		x: randomCoordinate, 
		y: randomCoordinate, 
		radius: randomRadius, 
		xDirection: 1, 
		yDirection: 1
	});
	console.log(ballArray)
}

// function addBall(){
// 	ballArray.push({x: 100, y: 100, radius: 20, xDirection: 1, yDirection: 1});
// 	console.log(ballArray)
// }


var ballin = setInterval(drawBall, 20, ballArray);

// canvas.addEventListener("click", function(event){
// 	// console.log(event.x, event.y)
// 	for (let i = 0; i < ballArray.length; i++){
// 		if (Math.abs((event.x - ballArray[i].x) - (event.y - ballArray[i].y)) <= ballArray[i].radius){
// 			console.log("HIT!")
// 		}
// 	}			
// });












