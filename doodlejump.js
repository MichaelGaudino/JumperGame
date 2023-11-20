
/*JavaScript File for Doodle Jump*/


//create board variable. References canvas tag with the id board
let board;
let boardWidth = 360; // these dimensions are from our background img.
let boardHeight = 576;
let context;c//this will be used for drawing on the canvas

// create the doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
// giving it an x and y position
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight*7/8 - doodlerHeight;
// variables to keep track of images
let doodlerRightImg;
let doodlerLeftImg;

//create an object for the doodler. These are our arguments
let doodler = {
    img : null, //if we use an image we must specify image source here
    x : doodlerX,
    y : doodlerY,
    width : doodlerWidth,
    height : doodlerHeight
}

//This is when our window loads
window.onload = function() {
    board = document.getElementById("board") //this is a reference to the canvas tag. board is the id
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // this is used for drawing on the board

    // draw doodler on the canvas
    //changing color of the pen
    context.fillStyle = "green";
    context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

    //load images
    doodlerRightImg = new Image(); //default facing 
    doodlerRightImg.src = "./doodler-right.png";
    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function () {
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }
}