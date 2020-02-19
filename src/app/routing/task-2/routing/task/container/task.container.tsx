import * as React from 'react';
import { IAllTaskProps, ITaskParams } from '../state/task.models';
import { IAppState } from '../../../../../state/app.models';
import { connect } from 'react-redux';

class TaskPage extends React.Component<IAllTaskProps> {
	render() {
		const { id } = this.props.match.params as ITaskParams;
		const task = this.props.data.filter(item => item.id === id)[0];
		return (
			<div className={'hwk-task'}>
				<div className={'hwk-task__heading'}>
					{task.title}
				</div>
				<div className={'hwk-task__content'}>
					{task.description}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ tasks}: IAppState) => ({
	data: tasks.data,
});

export default connect(mapStateToProps)(TaskPage);
