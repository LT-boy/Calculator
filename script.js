const numbers = document.querySelectorAll('[data-number]');
const currentOpScreen = document.getElementById('currentOpScreen');
const clearButton = document.getElementById('button-clear');


clearButton.addEventListener('click', clear);

numbers.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

function clear() {
	currentOpScreen.textContent = '0';
}

function appendNumber(number) {
	if (currentOpScreen.textContent === '0') {
		resetScreen();
	}
	currentOpScreen.textContent += number;
}

function resetScreen() {
	currentOpScreen.textContent = '';
}