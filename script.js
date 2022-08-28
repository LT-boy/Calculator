let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const currentOpScreen = document.getElementById('currentOpScreen');
const lastOpScreen = document.getElementById('lastOpScreen')
const clearButton = document.getElementById('button-clear');
const deleteButton = document.getElementById('button-delete');
const equalsButton = document.getElementById('button-equal');
const pointButton = document.getElementById('button-point');


clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', evaluate);
deleteButton.addEventListener('click', deleteNumber);
pointButton.addEventListener('click', appendPoint);

numbers.forEach((button) =>
	button.addEventListener('click', () => appendNumber(button.textContent))
)

operators.forEach((button) =>
	button.addEventListener('click', () => setOperation(button.textContent))
)

function clear() {
	currentOpScreen.textContent = '0';
	lastOpScreen.textContent = '';
	firstOperand = '';
	secondOperand = '';
	currentOperation = null;
}

function deleteNumber() {
	currentOpScreen.textContent = currentOpScreen.textContent.toString();
	currentOpScreen.textContent = currentOpScreen.textContent.slice(0, -1);
}

function appendNumber(number) {
	if (currentOpScreen.textContent === '0' || shouldResetScreen) {
		resetScreen();
	}
	currentOpScreen.textContent += number;
}

function appendPoint() {
	if(shouldResetScreen) resetScreen();
	if(currentOpScreen.textContent === '') {
		currentOpScreen.textContent = '0';
	}
	if(currentOpScreen.textContent.includes('.')) return
	currentOpScreen.textContent += '.';
}

function setOperation(operator) {
	if(currentOperation !== null) evaluate();
	firstOperand = currentOpScreen.textContent;
	currentOperation = operator;
	lastOpScreen.textContent = `${firstOperand} ${currentOperation}`;
	shouldResetScreen = true;
}

function resetScreen() {
	currentOpScreen.textContent = '';
	shouldResetScreen = false;
}

function evaluate() {
	if(currentOperation === null || shouldResetScreen) return;
	if(currentOperation === '÷' && currentOpScreen.textContent === '0') {
		alert("Division by 0 not allowed!");
		return;
	}
	secondOperand = currentOpScreen.textContent;
	currentOpScreen.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand));
	lastOpScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
	currentOperation = null;
}

function roundResult(number) {
	return Math.round(number * 1000) / 1000
}

function operate(operator, a, b) {
	a = Number(a);
	b = Number(b);
	switch(operator) {
		case '+':
			return add(a, b);
		case '-':
			return substract(a, b);
		case '×':
			return multiply(a, b);
		case '÷':
			if(b === 0) return null;
			else return divide(a, b);
		default:
			return null;
	}
}

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

