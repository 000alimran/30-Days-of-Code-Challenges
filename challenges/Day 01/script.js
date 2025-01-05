console.log("Day 1 Challenge Loaded");
// Select the button and color span
const btn = document.getElementById("btn");
const colorDisplay = document.getElementById("color");

// Function to generate a random hex color
function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for the button
btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});
