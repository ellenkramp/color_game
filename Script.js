echo "# color_game" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/ellenkramp/color_game.git
git push -u origin master

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons(); 
    setUpSquares();
}

function setUpModeButtons(){
     //mode button event listeners
  for (var i = 0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset();
    });
}
}

function setUpSquares(){
    for (var i=0; i<squares.length; i++){
    //add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Dynamite!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again, Loser!";
            }
    });
}
    reset();
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    messageDisplay.textContent= "";
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of squares on page
    for (var i=0; i<squares.length; i++) {
        if(colors[i]){
           squares[i].style.display="block"; squares[i].style.backgroundColor = colors[i];
        } else {
           squares[i].style.display = "none"; 
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    
}
resetButton.addEventListener("click", function(){
   reset();
});

function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random()*256);
    //pick a green from 0-255
    var g = Math.floor(Math.random()*256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g +", " + b + ")"
    
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //repeat num times
    for (var i = 0; i<num; i++){
       //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function changeColors(color){
    //loop through all squares
    for(var i=0; i<squares.length; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = color;
}
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}













