class Input {
	constructor(placeHolder) {
		this.placeHolder = placeHolder || 'Type...';
		this._value = '';
	}

	get value() {
		return this._value;
	}

	setValue(newValue) {
		this._value = newValue;
	}
}

class NumberInput extends Input {
	constructor(placeHolder) {
		super(placeHolder);
		this.type = 'number';
	}
}

const decorateInput = function(input) {
	if ( validateRequired(input.value) ) {
		input.valid = true;
	} else {
		input.valid = false;
	}
	input.setValue = addValidators(input.setValue, [
		AddRequiredValidation,
		AddMaxLengthValidation,
		AddNumberValidation
	]);
};

const addValidators = function(setValue, validators) {
	return function() {
		for (let i = 0; i < validators.length; i++) {
			const validator = validators[i];
			if ( !validator(arguments[0]) ) {
				this.valid = false;
				return setValue.apply(this, arguments);
			}
		}
		this.valid = true;
		return setValue.apply(this, arguments);
	};
};

const AddRequiredValidation = function(value) {
	return validateRequired(value);
};

const AddMaxLengthValidation = function(value) {
	const maxLength = 3;
	if (value.toString().length <= maxLength) {
		return true;
	} else {
		console.log('Input value length is bigger then max length');
		return false;
	}
};

const AddNumberValidation = function(value) {
	if (typeof value === 'number') {
		return true;
	} else {
		console.log('Input value is not a number');
		return false;
	}
};

const validateRequired = function(value) {
	if (value !== undefined && value !== '') {
		return true;
	} else {
		console.log('Input value is an empty string or undefined');
		return false;
	}
};

let numberInput = new NumberInput('Type numbers...');

decorateInput(numberInput);

console.log(numberInput.valid);
numberInput.setValue('1');
console.log(numberInput.valid);
numberInput.setValue(1);
console.log(numberInput.valid);
numberInput.setValue(1111111111111111111111111111);
console.log(numberInput.valid);
