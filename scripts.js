// console.log("this is js")

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// context.moveTo(100,100);
// context.lineTo(200,200);
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
context.strokeStyle = "#ff0000"
// context.stroke();

// draw a circle:

context.beginPath()
context.fillStyle = "#f6b2ff"
context.arc(200,200,200,0*Math.PI,2*Math.PI);
// context.fill();
// context.stroke()





// class Ball {
// 	constructor(){
// 		this.x = 200;
// 		this.y = 200;
// 		this.radius = 50;
// 		this.xDirection = 1;
// 		this.yDirection = 1;
// 		this.red = 0;
// 		this.blue = 0;
// 		this.green = 0;
// 	}
// }

var ballArray = [{x: 200, y: 200, radius: 50, xDirection: 1, yDirection: 1}]



function drawBall(array){
	// red = Math.ceil(Math.random() * 255)
	// blue = Math.ceil(Math.random() * 255)
	// green = Math.ceil(Math.random() * 255)
	// context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
	for (i = 0; i < array.length; i++){
		ball = array[i];
		context.fillStyle = "rgb(150,255,120)";
		// console.log(context.fillStyle)
		context.beginPath();
		context.arc(ball.x,ball.y,ball.radius,0,2*Math.PI);
		context.clearRect(0,0,500,500);
		context.fill();
		if ((ball.x > 500 - ball.radius) || (ball.x <ball.radius)){
			ball.xDirection = -ball.xDirection;
		}
		if ((ball.y > 500 - ball.radius) || ball.y < ball.radius){
			ball.yDirection = -ball.yDirection;
		}
		// var randomX = Math.random() * 4
		// var randomY = Math.random() * 4
		ball.x += 4 * ball.xDirection;
		ball.y += 2 * ball.yDirection;
		array[i] = ball;
	}
}

function addBall(){
	ballArray.push({x: 200, y: 200, radius: 50, xDirection: 1, yDirection: 1});
	// ball = new Ball();
	console.log(ballArray)
}


var ballin = setInterval(drawBall, 20, ballArray);

canvas.addEventListener("click", function(event){
	// console.log(event.x, event.y)
	if (Math.abs((event.x - ball.x) - (event.y - ball.y)) <= ball.radius){
		console.log("HIT!")
	}
});












