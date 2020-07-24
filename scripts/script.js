const grid = document.querySelector('#grid');
const reset = document.querySelector('#reset');
const defaultColor = document.querySelector('#default');
const randomColor = document.querySelector('#random');
const grayscale = document.querySelector('#grayscale');

let colorValue = 0; //Color value used to allow user to select mode

makeGrid();
let squares = document.querySelectorAll('.grid-square');

defaultColor.addEventListener('click', () => {
    colorValue = 0;
});

randomColor.addEventListener('click', () => {
    colorValue = 1;
});

grayscale.addEventListener('click', () => {
    colorValue = 2;
})

//Below function creates the grid and has a default parameter of 16 to
//create the initial grid upon page load
function makeGrid (gridSize=16) {
    let columnCount = 'grid-template-columns:';
    let size = (500 / gridSize) - 2;  //This will be size of each square
                                      //Subtract 2 to account for 1px border
    for(let i=0; i<gridSize*gridSize; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = size + 'px';
        gridSquare.style.height = size + 'px';
        grid.appendChild(gridSquare);
        if(i%gridSize == 0) columnCount = columnCount + ' auto'; //If the end of a column
    }                                                            //has been reached, add
    grid.setAttribute('style',columnCount);                      //another column
}


squares.forEach((square) => {
    let lightness = 90;
    
    square.addEventListener('mouseover', () => {
        //Default color:
        if(colorValue == 0) square.classList.add('grid-drawn');

        //Random color:
        if(colorValue == 1){
            let r = Math.floor((Math.random() * 255) + 1);
            let g = Math.floor((Math.random() * 255) + 1);
            let b = Math.floor((Math.random() * 255) + 1);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        
        //Degrees of black
        if(colorValue == 2){
            if(lightness>=0){
                square.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
                lightness -= 10;
            }
        }
    });
});

reset.addEventListener('click', () => {
    resetGrid();
});

function resetGrid() {
    let gridSize = prompt("How many squares will be on each side of the grid?");
    while(isNaN(gridSize)){
        gridSize =prompt("Please enter a number");
    }
    squares.forEach((square) => {grid.removeChild(square)});

    makeGrid(gridSize);
    squares = document.querySelectorAll('.grid-square');
    drawAgain();
}

//This function listens for events on the redrawn grid
function drawAgain() {
    squares.forEach((square) => {
        let lightness = 90;
        square.addEventListener('mouseover', () => {
            //Default color:
            if(colorValue == 0) square.classList.add('grid-drawn');

            //Random color:
            if(colorValue == 1){
                let r = Math.floor((Math.random() * 255) + 1);
                let g = Math.floor((Math.random() * 255) + 1);
                let b = Math.floor((Math.random() * 255) + 1);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            
            //Degrees of black
            if(colorValue == 2){
                if(lightness>=0){
                    square.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
                    lightness -= 10;
                }
            }
        });
    });
}