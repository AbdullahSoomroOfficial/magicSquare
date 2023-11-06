import { generateMagicSquare } from "./generateMagicSquare.js";

const showPopupButton = document.getElementById("showPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const generateMagicSquareButton = document.getElementById(
  "generateMagicSquareButton"
);
const orderInput = document.getElementById("order");

showPopupButton.addEventListener("click", () => showPopup());
closePopupButton.addEventListener("click", () => closePopup(orderInput));
generateMagicSquareButton.addEventListener("click", () => createMagicSquare());

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup(inputField) {
  document.getElementById("popup").style.display = "none";
  inputField.value = "";
}

function createMagicSquare() {
  // Get the order from the user input
  const order = parseInt(orderInput.value);

  // Check if user provided order
  if (!order) {
    alert("Please enter a number.");
    return;
  }

  // Validate that the order is an odd number
  if (order % 2 === 0) {
    alert("Please enter an odd number for the order.");
    return;
  }

  // Close the popup
  closePopup(orderInput);

  // Call your function to generate the magic square
  const magicSquare = generateMagicSquare(order);

  // Display the magic square in the HTML
  displayMagicSquare(magicSquare);
}

function displayMagicSquare(square) {
  const magicSquareDiv = document.getElementById("magicSquare");
  magicSquareDiv.innerHTML = "";

  for (let i = 0; i < square.length; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let j = 0; j < square[i].length; j++) {
      const cellDiv = document.createElement("div");
      cellDiv.className = "cell";
      cellDiv.innerText = square[i][j];
      rowDiv.appendChild(cellDiv);
    }

    magicSquareDiv.appendChild(rowDiv);
  }
}
