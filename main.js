canvas=document.getElementById("My_canvas");
ctx=canvas.getContext("2d");

car_width=80;
car_height=200;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=10;
car_y=10;


function add() {
	background_image_tag=new Image();
	background_image_tag.unload=uploadBackground;
	background_image_tag.src=background_image;
	car_image_tag=new Image();
	car_image_tag.unload=uploadgreencar;
	car_image_tag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(car_image_tag,car_x,car_y,car_width,car_height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y>=0){
		car_y=car_y-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (car_y=500){
		car_y=car_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (car_x>=0){
		car_x=car_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (car_x>=0){
		car_x=car_x+10;
		uploadBackground();
		uploadgreencar();
	}
}
