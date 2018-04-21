const root = document.getElementsByClassName('root')[0];

export default () => {
	const inputsContainer = document.createElement('div');
	const buttonsContainer = document.createElement('div');
	const result = document.createElement('p');
	result.classList.add('result');
	root.appendChild(inputsContainer);
	root.appendChild(buttonsContainer);
	root.appendChild(result);
	createInput(inputsContainer);
	createInput(inputsContainer);
	createButton(buttonsContainer, '+', 'add');
	createButton(buttonsContainer, '-', 'minus');
	createButton(buttonsContainer, '÷', 'division');
	createButton(buttonsContainer, '×', 'multiplication');
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
