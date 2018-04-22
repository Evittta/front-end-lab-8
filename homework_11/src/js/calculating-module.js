const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const minus = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => {
	if (secondNumber) {
		return firstNumber / secondNumber;
	} else {
		return 'Division by zero is forbidden';
	}
};

export default {
	add,
	minus,
	multiply,
	divide
};
