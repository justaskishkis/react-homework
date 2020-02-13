import * as React from 'react';
import FormField from '../../../../ui-components/form-field/form-field';
import Button from '../../../../ui-components/button/button';
import { IButtonMod, IButtonType } from '../../../../ui-components/button/button.models';
import FormControl from '../../../../ui-components/form-control/form-control';
import { IFormControlType } from '../../../../ui-components/form-control/form-control.models';
import FormActions from '../../../../ui-components/form-actions/form-actions';
import Card from '../../../../ui-components/card/card';
import { ITask1State } from '../state/task-1.models';

class Task1Page extends React.Component {
	state: ITask1State;

	constructor(props: {}) {
		super(props);
		this.state = {
			formControls: {
				inputField: {
					id: 'task1Field',
					value: '',
					label: 'Field for value',
					placeholder: 'Enter value from 1 to 10 symbols',
					valid: false,
					touched: false,
					validationRules: {
						minLength: 1,
						maxLength: 10,
						isRequired: true,
					}
				}
			}
		};
		this.submit = this.submit.bind(this);
	}

	render() {
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--6'}>
						<Card>
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
										name=''/>
								</FormField>
								<FormActions>
									<Button
										type={IButtonType.submit}
										text='Count'
										mod={IButtonMod.primary}/>
								</FormActions>
							</form>
						</Card>
					</div>
					<div className={'hwk-grid-col hwk-grid-col--6'}>
						<h2>
							Rezultatas:
						</h2>
					</div>
				</div>
			</div>
		);
	}

	private submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log('clicked me');
	}

	// tslint:disable-next-line:no-any
	private handleChange(value: any) {
		this.setState({
			fieldValue: value
		});
	}
}

export default Task1Page;
