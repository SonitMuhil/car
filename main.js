canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

background_image="back.png";



car1_width=120;
car1_height=70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width=120;
car2_height=70;
car2_image = "car2.jpg";
car2_x = 10;
car2_y = 100;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image;   // load image
	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car1down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car1left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car1right();
			console.log("right arrow key");
		}
		if(keyPressed == '85')
		{
			car2up();
			console.log("up arrow key");
		}
		if(keyPressed == '68')
		{
			car2down();
			console.log("down arrow key");
		}
		if(keyPressed == '76')
		{
			car2left();
			console.log("left arrow key");
		}
		if(keyPressed == '82')
		{
			car2right();
			console.log("right arrow key");
		}
}
function car1up(){
	if (car1_y>=0){
		car1_y=car1_y-10;
		console.log("when up arrow is pressed, x=" +car1_x+"|y=" +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1down(){
	if (car1_y<=500){
		car1_y=car1_y+10;
		console.log("when down arrow is pressed, x=" +car1_x+"|y=" +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1left(){
	if (car1_x>=0){
		car1_x=car1_x-10;
		console.log("when left arrow is pressed, x=" +car1_x+"|y=" +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1right(){
	if (car1_x<=700){
		car1_x=car1_x+10;
		console.log("when right arrow is pressed, x=" +car1_x+"|y=" +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car2up(){
	if (car2_y>=0){
		car2_y=car2_y-10;
		console.log("when up arrow is pressed, x=" +car2_x+"|y=" +car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car2down(){
	if (car2_y<=500){
		car2_y=car2_y+10;
		console.log("when down arrow is pressed, x=" +car2_x+"|y=" +car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car2left(){
	if (car2_x>=0){
		car2_x=car2_x-10;
		console.log("when left arrow is pressed, x=" +car2_x+"|y=" +car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car2right(){
	if (car2_x<=700){
		car2_x=car2_x+10;
		console.log("when right arrow is pressed, x=" +car2_x+"|y=" +car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}