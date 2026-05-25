const container = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear")
const changeSizeBtn = document.querySelector(".change-size");
const rainbowBtn = document.querySelector(".rainbow");
const eraseBtn = document.querySelector(".erase")
const colorBtn = document.querySelector(".color")
let gridSize = 16;
let mode = "color";
let isDrawing = false;

function createGrid(squaresPerSide) {
    container.innerHTML = ""; // clear before recreating

    const containerSize = container.clientWidth;
    const squareSize = containerSize / squaresPerSide;

    const totalSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < totalSquares; i++) {
        
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDrawing = true;
            paintSquare(square);
        });

        square.addEventListener('mouseup', () => isDrawing = false);
        window.addEventListener('mouseup', () => isDrawing = false);
        square.addEventListener('mouseenter', () => isDrawing && paintSquare(square)); 

        container.appendChild(square);
    }
}

function paintSquare(square) {
    if (mode === "rainbow") square.style.backgroundColor = getRandomColor();
    else if (mode === "erase") square.style.backgroundColor = "white";
    else if (mode === "color") square.style.backgroundColor = "black";
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

rainbowBtn.addEventListener('click', () => mode = "rainbow");
eraseBtn.addEventListener('click', () => mode = "erase");
colorBtn.addEventListener('click', () => mode = "color");
clearBtn.addEventListener('click', () => createGrid(gridSize));

changeSizeBtn.addEventListener('click', () => {
    const userGridSize = prompt("Enter the number of squares per side for the new grid (max 100)");
    if (userGridSize > 0 && userGridSize <= 100) {
        gridSize = userGridSize;
        createGrid(gridSize);
    }
    else alert("Sorry, the grid size must be between 0 and 100");
});

createGrid(gridSize);