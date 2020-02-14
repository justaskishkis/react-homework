export const task1FormControls = {
	inputField: {
		name: 'inputField',
			id: 'task1Field',
			value: '',
			label: 'Value',
			placeholder: 'Enter value from 1 to 10 symbols',
			valid: false,
			touched: false,
			validationRules: {
			minLength: 1,
				maxLength: 10,
				isRequired: true
		}
	}
};
