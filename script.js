const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = ""; // clear before recreating
    const containerSize = container.clientWidth;
    const squareSize = containerSize / size;
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "yellow";
        });

        container.appendChild(div);
    }
}

createGrid(16);

const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    const userSquareSize = prompt("Enter the number of squares per side for the new grid (max 100)");
    if (userSquareSize <= 100) {
        createGrid(userSquareSize);
    }
    else alert("Sorry, the maximum grid size is 100");
})