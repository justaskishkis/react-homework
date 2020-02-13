// TODO: move models or maybe find them ??
export interface ITask1State {
	formControls: {
		inputField: {
			id: string;
			value: string;
			label: string;
			placeholder: string;
			valid: boolean;
			touched: boolean;
			validationRules: {
				minLength: number;
				maxLength: number;
				isRequired: boolean;
			};
		};
	};
}
