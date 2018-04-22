import calculate from './calculating-module';
import interfaceM from './interface-module';
import '../styles/styles.css';

interfaceM.createInterface();

for (let i = 0; i < interfaceM.getButtons().length; i++) {
	const button = interfaceM.getButtons()[i];
	const inputs = interfaceM.getInputs();
	button.addEventListener('click', () => {
		if (validate(inputs, interfaceM.getFieldForResult())) {
			outputResult(
				calculate[button.dataset.func](
					Number(inputs[0].value),
					Number(inputs[1].value)
				),
				interfaceM.getFieldForResult()
			);
		}
	});
}

const outputResult = (res, target) => {
	target.innerHTML = res;
};

const validate = (inputs, target) => {
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i];
		if (isNaN(Number(input.value)) || input.value === '') {
			outputResult('Please input numbers', target);
			return false;
		}
	}
	return true;
};
