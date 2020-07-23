const grid = document.querySelector('#grid');
const button = document.querySelector('button');

makeGrid();
let squares = document.querySelectorAll('.grid-square');

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
    square.addEventListener('mouseover', () => {
        square.classList.add('grid-drawn');
    });
});

button.addEventListener('click', () => {
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
        square.addEventListener('mouseover', () => {
            square.classList.add('grid-drawn');
        });
    });
}