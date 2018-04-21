const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const minus = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;
const division = (firstNumber, secondNumber) => {
	if (secondNumber) {
		return firstNumber / secondNumber;
	} else {
		return 'Division by zero is forbidden';
	}
};

export default {
	add,
	minus,
	multiplication,
	division
};
