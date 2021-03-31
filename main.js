roverX = 10;
roverY = 10;
rover_img = "racecar.jpg.png";
background_img = "race-track.jpg";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
    }

    if(keyPressed == '40') {
        down();
    }

    if(keyPressed == '37') {
        left();
    }

    if(keyPressed == '39') {
        right();
    }
}