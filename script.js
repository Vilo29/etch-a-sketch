const container = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear")
const changeSizeBtn = document.querySelector(".change-size");
const rainbowBtn = document.querySelector(".rainbow");
const eraseBtn = document.querySelector(".erase")
const colorBtn = document.querySelector(".color")
let gridSize = 16;
let mode = "draw";

function createGrid(squaresPerSide) {
    container.innerHTML = ""; // clear before recreating

    const containerSize = container.clientWidth;
    const squareSize = containerSize / squaresPerSide;

    const totalSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener('mouseenter', () => {
            if (mode === "rainbow") div.style.backgroundColor = getRandomColor();
            else if (mode === "erase") div.style.backgroundColor = "white";
            else if (mode === "draw") div.style.backgroundColor = "black";
        });

        container.appendChild(div);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

rainbowBtn.addEventListener('click', () => mode = "rainbow");
eraseBtn.addEventListener('click', () => mode = "erase");
colorBtn.addEventListener('click', () => mode = "draw");

changeSizeBtn.addEventListener('click', () => {
    const userGridSize = prompt("Enter the number of squares per side for the new grid (max 100)");
    if (userGridSize > 0 && userGridSize <= 100) {
        gridSize = userGridSize;
        createGrid(gridSize);
    }
    else alert("Sorry, the grid size must be between 0 and 100");
});

// Clear screen
clearBtn.addEventListener('click', () => {
    createGrid(gridSize);
});

createGrid(gridSize);