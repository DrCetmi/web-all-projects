

const colorDisplay = document.getElementById("color-display"); 
const resetButton = document.getElementById("reset"); 
const message = document.getElementById("message"); 
const squares = document.querySelectorAll(".square");

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
    arr.push(randomColor());
    }
    return arr;
}
let colors = generateRandomColors(6);

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
let pickedColor = pickColor(); 
colorDisplay.textContent = pickedColor;

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    const clickedColor = this.style.backgroundColor; 
    if (clickedColor === pickedColor) {
      message.textContent = "Richtig!"; 
      changeColors(pickedColor);
      resetButton.textContent = "Nochmal spielen?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Versuch es erneut";
    }
  });
}

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    }

    resetButton.textContent = "Neue Farben";
    message.textContent = "";
});
