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
        container.appendChild(div);
    }
}

createGrid(16);
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "yellow";
    });
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = "purple";
    })
})

const btn = document.createElement("button");
btn.textContent = "Change grid size";
btn.classList.add("btn");
document.body.insertBefore(btn, container);

btn.addEventListener('click', () => {
    const userSquareSize = prompt("Enter the number of squares per side for the new grid");
    createGrid(userSquareSize);
})