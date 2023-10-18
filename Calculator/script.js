function clearInput() {
  document.getElementById('display').value = '';
}

function deleteLastEntry() {
  var displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  var expression = document.getElementById('display').value;
  try {
    var result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
