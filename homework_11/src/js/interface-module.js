const root = document.getElementsByClassName('root')[0];

const createInterface = () => {
	const inputsContainer = document.createElement('div');
	const buttonsContainer = document.createElement('div');
	const fieldForResult = document.createElement('p');
	fieldForResult.classList.add('result');
	root.appendChild(inputsContainer);
	root.appendChild(buttonsContainer);
	root.appendChild(fieldForResult);
	createInput(inputsContainer);
	createInput(inputsContainer);
	createButton(buttonsContainer, '+', 'add');
	createButton(buttonsContainer, '-', 'minus');
	createButton(buttonsContainer, '÷', 'divide');
	createButton(buttonsContainer, '×', 'multiply');
};
const createInput = parent => {
	const input = document.createElement('input');
	parent.appendChild(input);
	input.classList.add('input');
	input.setAttribute('placeholder', 'Please input number');
};
const createButton = (parent, content, func) => {
	const button = document.createElement('button');
	parent.appendChild(button);
	button.setAttribute('data-func', func);
	button.classList.add('button');
	button.innerHTML = content;
};
const getInputs = () => {
	return document.getElementsByTagName('input');
};
const getButtons = () => {
	return document.getElementsByTagName('button');
};
const getFieldForResult = () => {
	return document.getElementsByClassName('result')[0];
};

export default {
	createInterface,
	getInputs,
	getButtons,
	getFieldForResult
};
