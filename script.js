function press(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let exp = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(exp); // wrap in try/catch for errors
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
