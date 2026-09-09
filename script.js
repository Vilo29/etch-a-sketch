const container = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear")
const changeSizeBtn = document.querySelector(".change-size");
const rainbowBtn = document.querySelector(".rainbow");
const eraseBtn = document.querySelector(".erase")
const colorBtn = document.querySelector(".color")
const darkeningBtn = document.querySelector(".darkening");
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

        window.addEventListener('mouseup', () => isDrawing = false);
        square.addEventListener('mouseenter', () => isDrawing && paintSquare(square)); 

        container.appendChild(square);
    }
}

function paintSquare(square) {
    if (mode === "rainbow") square.style.backgroundColor = getRandomColor(square);
    else if (mode === "erase") {
        square.style.backgroundColor = "white";
        delete square.dataset.hue;
        delete square.dataset.level;
    }
    else if (mode === "color") square.style.backgroundColor = "black";
    else if (mode === "darkening") paintDarkening(square);

}

function getRandomColor(square) {
    square.dataset.hue = Math.floor(Math.random() * 360);
    square.dataset.level = 5;
    square.style.backgroundColor = `hsl(${square.dataset.hue}, 70%, 50%)`;
}

function paintDarkening(square) {
    if (!square.dataset.hue) {
        square.dataset.hue = Math.floor(Math.random() * 360);
        square.dataset.level = 0;
    }
    const level = Math.min(parseInt(square.dataset.level) + 1, 10);
    square.dataset.level = level;
    const lightness = 100 - level * 10;
    square.style.backgroundColor = `hsl(${square.dataset.hue}, 70%, ${lightness}%)`;
}

function setActiveButton(btn) {
    document.querySelectorAll(".btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

rainbowBtn.addEventListener('click', () => { mode = "rainbow"; setActiveButton(rainbowBtn)});
eraseBtn.addEventListener('click', () => { mode = "erase"; setActiveButton(eraseBtn)});
colorBtn.addEventListener('click', () => { mode = "color"; setActiveButton(colorBtn)});
darkeningBtn.addEventListener('click', () => { mode = "darkening"; setActiveButton(darkeningBtn)});
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