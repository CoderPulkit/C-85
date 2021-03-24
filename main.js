canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_imgs_array=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
random_no=Math.floor(Math.random()*4);
console.log(random_no);
rover_width=100;
rover_height=90;
background_image=nasa_mars_imgs_array[random_no];
console.log("background_image="+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add() {
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadBackground;
    bg_imgtag.src=background_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadBackground() {
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed=e.keyCode;
console.log(keyPressed);
if (keyPressed=='38') {
    up();
    console.log("up");
}
if (keyPressed=='40') {
    down();
    console.log("down");
}
    if (keyPressed=='37') {
        left();
        console.log("left");
    }
        if (keyPressed=='39') {
            right();
            console.log("right");
        }
}
function up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x=  "+rover_x+",y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x=  "+rover_x+",y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10;
        console.log("when rigth arrow is pressed,x=  "+rover_x+",y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if (rover_x>=0) {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed,x=  "+rover_x+",y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}