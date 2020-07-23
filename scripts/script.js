const grid = document.querySelector('#grid');

makeGrid();

function makeGrid () {
    let columnCount = 'grid-template-columns:';
    for(let i=0; i<256; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        grid.appendChild(gridSquare);
        if(i%16 == 0) columnCount = columnCount + ' auto';
    }
    grid.setAttribute('style',columnCount);
}