var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
	"#233656",
	"#415B76",
	"#7B9BA6",
	"#CDD6D5",
	"#EEF4F2",
];

function Circle(x, y, dx, dy, radius, gravity) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.gravity = gravity;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; 

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		// c.strokeStyle = "blue";
		// c.stroke();
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		// if(this.y > innerHeight) {
		// 	this.y = this.y - innerHeight - 150;
		// }

		if(this.x > innerWidth) {
			this.x = this.x - innerWidth -5;
			this.y = this.y;
		}

		if(this.y > innerHeight) {
			this.y = this.y - innerHeight;
			this.x = this.x - innerHeight/3;
		}

		// if(this.x > innerWidth || this.y > innerHeight || this.y < 0) {
		// 	//this.y = this.y - innerHeight;
		// 	this.x = -50;
		// 	this.y = Math.random() * innerHeight - 50;
		// 	// this.y = - 10;
		// }

		this.divide = this.gravity/5;

		// if(this.y > 200) {
		// 	this.x = this.x + this.divide;

		// 	//this.x = this.x * 1.001;
		// }

		// if(this.y > 400) {
		// 	this.x *= -this.gravity;
		// 	this.x = this.x * (-1.001);
		// }

		this.x += this.dx + this.divide;
		this.y += this.dy;

		
		this.draw();
	}
} 

var circleArray = [];

function init() {
	
	circleArray = [];

	for(var i=0; i < 750; i++) {
		// var gravity = Math.random() * (max - min) + min;
		// var gravity = Math.random() * (1.001 - (-1.001) + (-1.001);
		var gravity = 1.00050;
		// var gravity = Math.random() * 1.001;
		var x = Math.random() * innerWidth;
		var y = Math.random() * innerHeight;
		var dx = 0;
		var dy = Math.random() * 0.2;
		//var dy = (Math.random() * 1.2) * 0.5;
		var radius = Math.random() * 1.5 + 1;



		circleArray.push(new Circle(x, y, dx, dy, radius, gravity));
	}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.fillStyle = "black";
	c.fillRect(0, 0, canvas.width, canvas.height);

	// for(var r=0; r < 0.99; r+=0.) {
	// 	c.save();
	// 	c.rotate(r * 1.01);
		// if (r % 0.5) {
		// 	r = r/ (-0.2 * 1);
		// }

		for(var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}

		// c.restore();

	// }



}

animate();
init();




