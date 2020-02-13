import * as React from 'react';
import { IFormControl } from './form-control.models';
// TODO: implement story book for all ui components
// import styles from './form-control.styl';

class FormControl extends React.Component<IFormControl> {
	constructor(props: IFormControl) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<input
				placeholder={this.props.placeHolder}
				onChange={this.handleChange}
				className={'jk-form__control'}
				type={this.props.type}
				name={this.props.name ? this.props.name : ''}
				id={this.props.id}/>
		);
	}

	private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.props.onChange(event.target.value);
	}
}

export default FormControl;
