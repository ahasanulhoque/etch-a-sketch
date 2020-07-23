const grid = document.querySelector('#grid');
const button = document.querySelector('button');

makeGrid();


let squares = document.querySelectorAll('.grid-square');


function makeGrid (gridSize=16) {
    let columnCount = 'grid-template-columns:';
    let size = 400 / gridSize;
    console.log(size);
    let totalSize = 0;
    for(let i=0; i<gridSize*gridSize; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = size + 'px';
        gridSquare.style.height = size + 'px';
        totalSize += size;
        grid.appendChild(gridSquare);
        if(i%gridSize == 0) columnCount = columnCount + ' auto';
    }
    console.log(totalSize);
    grid.setAttribute('style',columnCount);
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
    let gridSize = prompt("How many squares will the grid have?");
    while(isNaN(gridSize)){
        gridSize =prompt("Please enter a number");
    }
    squares.forEach((square) => {grid.removeChild(square)});

    makeGrid(gridSize);
    squares = document.querySelectorAll('.grid-square');
    drawAgain();
}

function drawAgain() {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('grid-drawn');
        });
    });
}