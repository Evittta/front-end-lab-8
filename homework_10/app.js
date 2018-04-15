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

class TextInput extends Input {
	constructor(placeHolder) {
		super(placeHolder);
		this.type = 'string';
	}
}

function addDecorator(f, checks) {
	return function() {
		for (var i = 0; i < checks.length; i++) {
			if (!checks[i](arguments[0])) {
				this.valid = false;
				alert('Некорректный тип аргумента номер ' + i);
				return;
			}
		}
		this.valid = true;
		return f.apply(this, arguments);
	};
}

const AddRequiredValidation = function(obj) {
	if (obj) {
		return true;
	} else {
		return false;
	}
};

const AddMaxLengthValidation = value => {
	let maxLength = 2;
	return value.toString().length < maxLength;
};

const AddNumberValidation = value => {
	if (typeof value === 'number') {
		return true;
	} else {
		return false;
	}
};

let numberInput = new NumberInput('Type numbers...');
let textInput = new TextInput('Type string...');
console.log(numberInput);
//  Then you can create add validation decorators and add functionality to numberInput
//  AddRequiredValidation Decorator that add required validation
//  AddMaxLengthValidation Decorator that add max length validation
//  AddNumberValidation Decorator for only number values validation

numberInput.setValue = addDecoratore(numberInput.setValue, [
	AddRequiredValidation,
	AddMaxLengthValidation,
	AddNumberValidation
]);
/*AddMaxLengthValidation(numberInput);
AddNumberValidation(numberInput);*/

// The desired behaviour would be
console.log(numberInput.valid); //---> false, because of required validator
numberInput.setValue('1');
console.log(numberInput.valid); //---> false, because of number validator
numberInput.setValue(1);
console.log(numberInput.valid); //---> true, all validators pass
numberInput.setValue(1111111111111111111111111111);
console.log(numberInput.valid); //---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;
/*
console.log("text");
console.log(textInput.valid); //---> false, because of required validator
textInput.setValue("1");
console.log(textInput.valid); //---> true
textInput.setValue(1);
console.log(textInput.valid); //---> false
textInput.setValue(1111111111111111111111111111);
console.log(textInput.valid); //---> false, because of max length validator
*/
