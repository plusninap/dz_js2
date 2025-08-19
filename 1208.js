let x = 100;
let y = 100;

function moveUp() {
    y -= 20;
    updatePosition();
}

function moveDown() {
    y += 20;
    updatePosition();
}

function moveLeft() {
    x -= 20;
    updatePosition();
}

function moveRight() {
    x += 20;
    updatePosition();
}

function resetPosition() {
    x = 100;
    y = 100;
    updatePosition();
}

function updatePosition() {
    let square = document.getElementById("square");
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
}

// Назначаем обработчики событий
document.getElementById("upBtn").onclick = moveUp;
document.getElementById("downBtn").onclick = moveDown;
document.getElementById("leftBtn").onclick = moveLeft;
document.getElementById("rightBtn").onclick = moveRight;
document.getElementById("resetBtn").onclick = resetPosition;