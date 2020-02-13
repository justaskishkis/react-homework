import * as React from 'react';
import Card from '../../../../ui-components/card/card';
import Task1Form from '../features/form/container/form.container';

class Task1Page extends React.Component {
	render() {
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--6'}>
						<Card>
							<Task1Form submitted={this.handleSubmitted} />
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

	private handleSubmitted(value: string) {
		console.log(value);
	}
}

export default Task1Page;
