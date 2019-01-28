var colors;
var hardLevel = 6;
var easyLevel = 3;
var currentLevel = hardLevel;
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var levelButtons = document.querySelectorAll(".mode");

setupButtons();
setupSquares();
startGame();

function setupButtons(){
    resetButton.addEventListener("click", function(){
        reset();
    });

    for (var i = 0; i < levelButtons.length; i++){
        levelButtons[i].addEventListener("click", function(){
            levelButtons[0].classList.remove("selected");
            levelButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? currentLevel = easyLevel : currentLevel = hardLevel;
            reset();
        })
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                for (var j = 0; j < squares.length; j++){
                    squares[j].style.backgroundColor = pickedColor;
                }
                document.querySelector("h1").style.backgroundColor = pickedColor;
            }
            else{
                this.style.backgroundColor = "";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function startGame(){
    colors = genRandomColors(currentLevel);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];            
        }
        else{
            squares[i].style.display = "none";
        }                  
    }
}

function reset(){
    document.querySelector("h1").style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New colors";
    startGame();
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num){
    var arr = [];

    for(i=0; i < num; i++){
        
       arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

