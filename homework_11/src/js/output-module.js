import calculate from './calculating-module';
import createInterface from './interface-module';
import '../styles/styles.css';

createInterface();

const getResult = () => {
	const inputs = document.getElementsByTagName('input');
	const buttons = document.getElementsByTagName('button');
	const result = document.getElementsByClassName('result')[0];
	for (let i = 0; i < buttons.length; i++) {
		const button = buttons[i];
		button.addEventListener('click', () => {
			if ( validate(inputs, result) ) {
				outputResult(
					calculate[button.dataset.func](
						Number(inputs[0].value),
						Number(inputs[1].value)
					),
					result
				);
			}
		});
	}
};

const outputResult = (res, target) => {
	target.innerHTML = res;
};

const validate = (inputs, target) => {
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i];
		if ( isNaN(Number(input.value)) || input.value === '' ) {
			outputResult('Please input numbers', target);
			return false;
		}
	}
	return true;
};

getResult();
