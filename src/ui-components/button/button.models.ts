export enum IButtonMod {
	PRIMARY = 'primary',
}

export enum IButtonType {
	SUBMIT = 'submit',
}

export interface IButton {
	text: string;
	type: IButtonType;
	mod: IButtonMod;
	disabled?: boolean;
	onClick?: () => void;
}
