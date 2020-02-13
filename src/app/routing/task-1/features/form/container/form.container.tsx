import * as React from 'react';
import FormField from '../../../../../../ui-components/form-field/form-field';
import Button from '../../../../../../ui-components/button/button';
import { IButtonMod, IButtonType } from '../../../../../../ui-components/button/button.models';
import FormControl from '../../../../../../ui-components/form-control/form-control';
import { IFormControl, IFormControlType } from '../../../../../../ui-components/form-control/form-control.models';
import FormActions from '../../../../../../ui-components/form-actions/form-actions';
import { ITask1FormControls, ITask1InputField, ITask1FormState } from '../../../state/task-1.models';
import { validate } from '../../../../../../lib/validators/validators';
import { ITask1Form } from '../state/form.models';

class Task1Form extends React.Component<ITask1Form> {
	state: ITask1FormState;

	constructor(props: ITask1Form) {
		super(props);
		this.state = {
			formControls: {
				inputField: {
					name: 'inputField',
					id: 'task1Field',
					value: '',
					label: 'Field for value',
					placeholder: 'Enter value from 1 to 10 symbols',
					valid: false,
					touched: false,
					validationRules: {
						minLength: 1,
						maxLength: 10,
						isRequired: true
					}
				}
			}
		};
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<FormField
					label={this.state.formControls.inputField.label}
					labelFor={this.state.formControls.inputField.id}
					required={this.state.formControls.inputField.validationRules.isRequired}>
					<FormControl
						placeHolder={this.state.formControls.inputField.placeholder}
						onChange={this.handleChange}
						value={this.state.formControls.inputField.value}
						type={IFormControlType.text}
						id={this.state.formControls.inputField.id}
						name={this.state.formControls.inputField.name}
						touched={this.state.formControls.inputField.touched}
						valid={this.state.formControls.inputField.valid}/>
				</FormField>
				<FormActions>
					<Button
						disabled={!this.state.formControls.inputField.valid || this.props.disabled}
						type={IButtonType.submit}
						text='Count'
						mod={IButtonMod.primary}/>
				</FormActions>
			</form>
		);
	}

	private submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		this.props.submitted(this.state.formControls.inputField.value);
	}

	// tslint:disable-next-line:no-any
	private handleChange(formControl: IFormControl) {
		// tslint:disable-next-line:no-any
		const value: any = formControl.value;

		const updatedControls: ITask1FormControls = {
			...this.state.formControls
		};

		const updatedFormElement: ITask1InputField = {
			...updatedControls['inputField']
		};
		updatedFormElement.value = value;
		updatedFormElement.touched = true;
		updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

		updatedControls['inputField'] = updatedFormElement;

		this.setState({
			formControls: updatedControls
		});
	}
}

export default Task1Form;
