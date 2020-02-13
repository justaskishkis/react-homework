export interface IFormControl {
	type: IFormControlType;
	id: string;
	placeHolder: string;
	touched: boolean;
	valid: boolean;
	// tslint:disable-next-line:no-any
	value: any;
	// tslint:disable-next-line:no-any
	onChange: (value: any) => void;
	name?: string;
}

export enum IFormControlType {
	text = 'text',
}
