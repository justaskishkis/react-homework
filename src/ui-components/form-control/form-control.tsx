import * as React from 'react';
import { IFormControl } from './form-control.models';
// import styles from './form-control.styl';

class FormControl extends React.Component<IFormControl> {
	constructor(props: IFormControl) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		let className = 'jk-form__control';

		if (this.props.touched && !this.props.valid) {
			className = 'jk-form__control jk-form__control--danger';
		}

		return (
			<input
				placeholder={this.props.placeHolder}
				onChange={this.handleChange}
				className={className}
				type={this.props.type}
				name={this.props.name ? this.props.name : ''}
				id={this.props.id}/>
		);
	}

	private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.props.onChange(event.target);
	}
}

export default FormControl;
