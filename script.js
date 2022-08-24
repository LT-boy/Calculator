const numbers = document.querySelectorAll('[data-number]');
const currentOpScreen = document.getElementById('currentOpScreen');


numbers.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

function appendNumber(number) {
	currentOpScreen.textContent += number;
}