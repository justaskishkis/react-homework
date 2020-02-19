import * as React from 'react';
import { DragDropContext, DropResult, } from 'react-beautiful-dnd';
import Column from '../features/column/container/column.container';
import { IAllDashboardProps } from '../state/dashboard.models';
import { connect } from 'react-redux';
import { IAppState } from '../../../../../state/app.models';
import { updateDashboard } from '../state/dashboard.actions';
import { ITaskId } from '../../task/state/task.models';

class DashboardPage extends React.Component<IAllDashboardProps> {
	constructor(props: IAllDashboardProps) {
		super(props);
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onDragEnd(result: DropResult): void {
		const { source, destination, draggableId } = result;
		if (!destination) {
			return;
		}
		const { updateDashboard: update } = this.props;
		update({
			targetId: draggableId,
			sourceIndex: source.index,
			destinationIndex: destination.index,
			sourceColumnId: source.droppableId,
			destinationColumnId: destination.droppableId,
		});
	}

	public render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div
					className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary hwk-grid-container--negative-horizontal-spaces-primary'}>
					<div className={'hwk-grid-row'}>
						{this.props.data.map((column, index) => (
							<div
								className={'hwk-grid-col hwk-grid-col--6'}
								key={index}>
								<Column
									id={column.id}
									title={column.title}
									taskList={column.taskList}></Column>
							</div>
						))}
					</div>
				</div>
			</DragDropContext>
		);
	}
}

const mapStateToProps = ({ dashboard }: IAppState) => ({
	data: dashboard.data,
});

const mapDispatchToProps = {
	updateDashboard
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
