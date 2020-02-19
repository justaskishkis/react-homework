import * as React from 'react';
import { IFormField } from './form-field.models';
// import styles from './form-field.styl';

class FormField extends React.Component<IFormField> {
	render() {
		return (
			<div className='jk-form__field'>
				<div className={'jk-form__label ' + (this.props.required ? 'jk-form__label--required' : '')}>
					<label htmlFor={this.props.labelFor}>
						{this.props.label}
					</label>
				</div>
				<div className={'jk-form__element'}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default FormField;
