// Color Changer Functionality
const colorBtn = document.getElementById('colorBtn');
const colorDisplay = document.getElementById('colorDisplay');
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
let currentColorIndex = -1;

colorBtn.addEventListener('click', function() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const selectedColor = colors[currentColorIndex];
  document.body.style.backgroundColor = selectedColor;
  colorDisplay.textContent = 'Current: ' + selectedColor;
});

// Counter Functionality
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

increaseBtn.addEventListener('click', function() {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener('click', function() {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', function() {
  count = 0;
  updateCounter();
});

function updateCounter() {
  counter.textContent = count;
  
  // Change color based on count
  if (count > 10) {
    counter.style.color = '#FF6B6B';
  } else if (count > 5) {
    counter.style.color = '#FFA07A';
  } else if (count < -5) {
    counter.style.color = '#FF6B6B';
  } else if (count < 0) {
    counter.style.color = '#FFA07A';
  } else {
    counter.style.color = '#007bff';
  }
}
