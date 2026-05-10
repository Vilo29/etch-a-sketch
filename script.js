const container = document.querySelector(".container");

function createGrid(squaresPerSide) {
    container.innerHTML = ""; // clear before recreating
    const totalSquares = squaresPerSide * squaresPerSide;

    const containerSize = container.clientWidth;
    const squareSize = `${containerSize / squaresPerSide}`;
    
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "black";
        });

        container.appendChild(div);
    }
}

createGrid(16);

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    const userSquaresPerSide = prompt("Enter the number of squares per side for the new grid (max 100)");
    if (userSquaresPerSide <= 100) {
        createGrid(userSquaresPerSide);
    }
    else alert("Sorry, the maximum grid size is 100");
})