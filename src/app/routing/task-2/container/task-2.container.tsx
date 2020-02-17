import * as React from 'react';
import Task2Routes from '../routing/task-2-routes';

class Task2page extends React.Component {
	render() {
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--12'}>
						<Task2Routes />
					</div>
				</div>
			</div>
		);
	}
}

export default Task2page;
