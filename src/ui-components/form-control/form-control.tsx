import * as React from 'react';
import { IFormControl } from './form-control.models';
import { IButton } from '../button/button.models';
// TODO: implement story book for all ui components
// import styles from './form-control.styl';

class FormControl extends React.Component<IFormControl> {
	state: { fieldValue: string };

	constructor(props: IFormControl) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			fieldValue: ''
		};
	}

	render() {
		return (
			<input
				onChange={this.handleChange}
				className={'jk-form__control'}
				type={this.props.type}
				name={this.props.name ? this.props.name : ''}
				id={this.props.id}/>
		);
	}

	private handleChange(event: any) {
		this.state.fieldValue = event.target.value;
		this.props.onChange(this.state.fieldValue);
	}
}

export default FormControl;
