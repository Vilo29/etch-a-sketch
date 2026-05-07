const GRID = 16 * 16;

const container = document.querySelector(".container");

for (let i = 0; i < GRID; i++) {
    const div = document.createElement("div");
    div.classList.add("square")
    container.appendChild(div);
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "yellow";
    });
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = "purple";
    })
})