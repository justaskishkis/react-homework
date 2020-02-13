import * as React from 'react';
import FormField from '../../../../ui-components/form-field/form-field';
import Button from '../../../../ui-components/button/button';
import { IButtonMod, IButtonType } from '../../../../ui-components/button/button.models';
import FormControl from '../../../../ui-components/form-control/form-control';
import { IFormControlType } from '../../../../ui-components/form-control/form-control.models';
import FormActions from '../../../../ui-components/form-actions/form-actions';
import Card from '../../../../ui-components/card/card';

class Task1Page extends React.Component {
	state: { fieldValue: string };

	constructor(props: {}) {
		super(props);
		this.state = {
			fieldValue: ''
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
									label='Ivedimo laukas'
									labelFor={'task1Field'}
									required={true}>
									<FormControl
										onChange={this.handleChange}
										value={this.state.fieldValue}
										type={IFormControlType.text}
										id={'task1Field'}
										name=''/>
								</FormField>
								<FormActions>
									<Button
										type={IButtonType.submit}
										text='Click me'
										mod={IButtonMod.primary}/>
								</FormActions>
							</form>
						</Card>
					</div>
					<div className={'hwk-grid-col hwk-grid-col--6'}>
						Rezultatas cia
					</div>
				</div>
			</div>
		);
	}

	private submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log('clicked me');
	}

	private handleChange(value: any) {
		console.log('a', value);
	}
}

export default Task1Page;
