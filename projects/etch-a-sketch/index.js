let board = document.querySelector('#board');
let gridX = 16
let gridY = 16

createGrid();
function createGrid(gridX = 16, gridY = 16) {
    for (let i = 0; i < gridX * gridY; i++) {
        let box = document.createElement('span');
        box.style.backgroundColor = 'white';
        box.id = 'box'

        board.appendChild(box);
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = 'black';
        })
    }
    board.style.gridTemplateColumns = `repeat(${gridX}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridY}, 1fr)`;
}
let clearGridButton = document.querySelector('.clear');

function clearGrid() {
    let gridBoxes = document.querySelectorAll('#box');
    for (let i = 0; i < gridBoxes.length; i++) {
        if (gridBoxes[i].style.backgroundColor == 'black') {
            gridBoxes[i].style.backgroundColor = 'white';
        }
    }
}

clearGridButton.addEventListener('click', clearGrid);


let resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
    let newGridSize = prompt("Enter new grid size");
    if (newGridSize > 128) {
        alert("Size cannot be greater than 128(veryy laggy)");
    }
    else if (newGridSize == null) {
    
    }
    else {
        gridX = newGridSize;
        gridY = newGridSize;
        clearGrid();
        createGrid(newGridSize, newGridSize);
    }

})
