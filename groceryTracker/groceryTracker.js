// Function that accepts grocery amounts as parameters
function groceryTracker(g1, g2, g3) {
  let total = g1 + g2 + g3;
  return total;
}

// Function called on button click
function showTotal() {
  let grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
  let grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
  let grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

  let totalAmount = groceryTracker(grocery1, grocery2, grocery3);

  document.getElementById("result").innerText =
    `Total grocery expenditure is: ${totalAmount}`;
}
