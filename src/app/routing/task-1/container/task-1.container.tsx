import * as React from 'react';
import FormField from '../../../../ui-components/form-field/form-field';
import Button from '../../../../ui-components/button/button';

class Task1Page extends React.Component {
	render() {
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--12'}>
						<FormField label='Ivedimo laukas' required={true}>
							<input type='text'/>
						</FormField>
						<Button text='Click me' onClick={this.clickHandle}/>
					</div>
				</div>
			</div>
		);
	}

	clickHandle = () => {
		console.log('clicked me');
	}
}

export default Task1Page;
