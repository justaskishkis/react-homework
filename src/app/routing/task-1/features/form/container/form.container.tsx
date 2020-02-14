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
import { task1FormControls } from '../state/form.constants';

class Task1Form extends React.Component<ITask1Form> {
	state: ITask1FormState;

	constructor(props: ITask1Form) {
		super(props);
		this.state = { formControls: task1FormControls, };
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const { disabled } = this.props;
		const { label, id, validationRules, placeholder, value, name, touched, valid } = this.state.formControls.inputField;
		return (
			<form onSubmit={this.submit}>
				<FormField
					label={label}
					labelFor={id}
					required={validationRules.isRequired}>
					<FormControl
						placeHolder={placeholder}
						onChange={this.handleChange}
						value={value}
						type={IFormControlType.NUMBER}
						id={id}
						name={name}
						touched={touched}
						valid={valid}/>
				</FormField>
				<FormActions>
					<Button
						disabled={!valid || disabled}
						type={IButtonType.SUBMIT}
						text='Count'
						mod={IButtonMod.PRIMARY}/>
				</FormActions>
			</form>
		);
	}

	private submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		this.props.submitted(this.state.formControls.inputField.value);
	}

	private handleChange(formControl: IFormControl) {
		const value: string = formControl.value;

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
