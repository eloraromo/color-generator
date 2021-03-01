// this variable stores the "pick a color" button
const originalButton = document.getElementById("original-button")

// this variable stores the "random color" button
const randomButton = document.getElementById("random-button")

// this random number function will create color codes for the randomColor variable
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// this will use the randomNumber to create the randomColor and target it to the background color
function colorChange(event) {
  const randomColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
  event.target.style.backgroundColor = randomColor;
}

originalButton.onclick = colorChange;
randomButton.onwheel = colorChange;
