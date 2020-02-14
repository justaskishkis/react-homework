import { ITask1ValidationRules } from '../../app/routing/task-1/state/task-1.models';

export const validate = (value: any, rules: ITask1ValidationRules) => {
	let isValid = true;

	// tslint:disable-next-line
	for (const rule in rules) {
		switch (rule) {
			case 'minLength':
				isValid = isValid && minLengthValidator(value, rules[rule]);
				break;

			case 'maxLength':
				isValid = isValid && maxLengthValidator(value, rules[rule]);
				break;

			case 'isRequired':
				isValid = isValid && requiredValidator(value);
				break;

			default:
				isValid = true;
		}
	}

	return isValid;
};

const minLengthValidator = (value: string, minLength: number) => {
	return value.length >= minLength;
};

const maxLengthValidator = (value: string, maxLength: number) => {
	return value.length <= maxLength;
};

const requiredValidator = (value: string) => {
	return value.trim() !== '';
};
