import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { IAllDashboardTaskProps } from '../state/task.models';
import { IAppState } from '../../../../../../../state/app.models';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { appRoutesPaths } from '../../../../../../app-routes.constants';

class Task extends React.Component<IAllDashboardTaskProps> {
	render() {
		const task = this.props.data.filter(item => item.id === this.props.taskId)[0];

		return (
			<Draggable
				key={this.props.taskId}
				draggableId={this.props.taskId}
				index={this.props.index}>
				{(providedDraggable: DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (
					<div
						className={'hwk-dashboard-task ' + this.getTaskClass(snapshotDraggable.isDragging)}
						ref={providedDraggable.innerRef}
						{...providedDraggable.draggableProps}
						{...providedDraggable.dragHandleProps}
					>
						<div className={'hwk-dashboard-task__heading'}>
							<NavLink
								exact
								to={`${appRoutesPaths.task2}/task/${this.props.taskId}`}
							>
								{task ? task.title : 'No task id found'}
							</NavLink>
						</div>
					</div>
				)}
			</Draggable>
		);
	}

	private getTaskClass(isDragging: boolean): string {
		const className = isDragging ? 'hwk-task--dragging' : '';
		return className;
	}
}

const mapStateToProps = ({ tasks}: IAppState) => ({
	data: tasks.data,
});

export default connect(mapStateToProps)(Task);
