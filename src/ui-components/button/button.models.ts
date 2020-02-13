export enum IButtonMod {
	primary = 'primary',
}

export enum IButtonType {
	submit = 'submit',
}

export interface IButton {
	text: string;
	type: IButtonType;
	mod: IButtonMod;
	onClick?: () => void;
}
