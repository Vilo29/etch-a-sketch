const GRID = 16 * 16;

const container = document.querySelector(".container");

for (let i = 0; i < GRID; i++) {
    const div = document.createElement("div");
    div.classList.add("square")
    container.appendChild(div);
}