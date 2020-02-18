import React from 'react';
import {
	Droppable, DroppableProvided, DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import { IColumn } from '../state/column.models';
import Task from '../../task/container/task.container';

class Column extends React.Component<IColumn> {
	render() {
		return (
			<Droppable droppableId={this.props.id}>
				{(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
					<div
						className={'hwk-column ' + this.getColumnClass(snapshot.isDraggingOver)}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<div className={'hwk-column__heading'}>
							<h2>
								{this.props.title}
							</h2>
						</div>
						<div className={'hwk-column__item-list'}>
							{this.props.taskList.map((task, index) => (
								<Task
									key={task}
									taskId={task}
									index={index}></Task>
							))}
						</div>
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	}

	private getColumnClass(isDraggingOver: boolean): string {
		const className = isDraggingOver ? 'hwk-column--dragging-over' : '';
		return className;
	}
}

export default Column;
