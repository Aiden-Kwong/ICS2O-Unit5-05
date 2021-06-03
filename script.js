let length = 0

// Event listener to detect when button is clicked.
document.getElementById('submit').addEventListener('click', calculateArea)

// This function calculates the area by squaring length, if length is not a valid number it will instead display the determined error message.
function calculateArea () {
  length = document.getElementById('input').value // Set length variable to contents of text field.

  // Check if length is a valid number, else display error message.
  if (!isNaN(length)) {
    length = length * length // Multiplies length by itself to get area.
  document.getElementById('answer').innerHTML = 'The area is '+ length + '.' // Displays the answer.
  } else { 
    document.getElementById('answer').innerHTML = 'Please enter a valid number!' // Displays error message.
  }
  
}
