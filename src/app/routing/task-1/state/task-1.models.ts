export interface ITask1FormState {
	formControls: ITask1FormControls;
}

export interface ITask1FormControls {
	inputField: ITask1InputField;
}

export interface ITask1InputField {
	name: string;
	id: string;
	value: string;
	label: string;
	placeholder: string;
	valid: boolean;
	touched: boolean;
	validationRules: ITask1ValidationRules;
}

export interface ITask1ValidationRules {
	minLength: number;
	maxLength: number;
	isRequired: boolean;
}
