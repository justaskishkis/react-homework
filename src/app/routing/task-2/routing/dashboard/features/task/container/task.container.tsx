import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { IAllTaskProps } from '../state/task.models';
import { ITask, ITaskId } from '../../../../task/state/task.models';

// TODO: 1) map task list to this component and use task list data to return proper task
class Task extends React.Component<IAllTaskProps> {
	render() {
		const task = this.getTask(this.props.taskId);

		return (
			<Draggable
				key={this.props.taskId}
				draggableId={this.props.taskId}
				index={this.props.index}>
				{(providedDraggable: DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (
					<div
						className={'hwk-task ' + this.getTaskClass(snapshotDraggable.isDragging)}
						ref={providedDraggable.innerRef}
						{...providedDraggable.draggableProps}
						{...providedDraggable.dragHandleProps}
					>
						<div className={'hwk-task__heading'}>
							{task.title}
						</div>
					</div>
				)}
			</Draggable>
		);
	}

	private getTask(taskId: ITaskId): ITask {
		return {
			id: taskId,
			title: taskId,
			description: taskId,
		};
	}

	private getTaskClass(isDragging: boolean): string {
		const className = isDragging ? 'hwk-task--dragging' : '';
		return className;
	}
}

export default Task;
