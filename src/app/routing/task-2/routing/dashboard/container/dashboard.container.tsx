import * as React from 'react';
import { DragDropContext, DropResult, } from 'react-beautiful-dnd';
import { dashboardColumnList } from '../state/dashboard.constants';
import { IColumn } from '../features/column/state/column.models';
import { ITask } from '../../task/state/task.models';
import Column from '../features/column/container/column.container';

// TODO: 2) map redux state
interface IAppState {
	columnList: IColumn[];
}

class DashboardPage extends React.Component<unknown, IAppState> {
	constructor(props: unknown) {
		super(props);
		// TODO: 2) map redux state
		this.state = {
			columnList: dashboardColumnList,
		};
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onDragEnd(result: DropResult): void {
		console.log('r', result);
		const { source, destination, draggableId } = result;
		if (!destination) {
			return;
		}
		const sameSource = source.droppableId === destination.droppableId;
		if (sameSource) {
			// TODO: 3) add actions to implement these interactions
			// --call action reorder on redux
			// get appropriate column
			// get it's task list
			// reorder task list using: task list, source.index, destination.index
			// assign new task list to column
			// assign new column data to state with setState method

			// const reorder = (list: IItem[], startIndex: number, endIndex: number): IItem[] => {
			// 	const result = [...list];
			// 	const [removed] = result.splice(startIndex, 1);
			// 	result.splice(endIndex, 0, removed);
			//
			// 	return result;
			// };
		} else {
			// TODO: 3) add actions to implement these interactions
			// --call action move on redux
			// get source column

			// get target task using draggableId

			// get source task list
			// remove target task from source task list using source.index
			// assign update task list to source column

			// get target column
			// get target task list
			// add task to target list using destination.index
			// assign update task list to target column

			// assign updated source/target columns to state with setState method

			// const move = (
			// 	source: IItem[],
			// 	destination: IItem[],
			// 	droppableSource: DraggableLocation,
			// 	droppableDestination: DraggableLocation
			// ): IMoveResult | any => {
			// 	const sourceClone = [...source];
			// 	const destClone = [...destination];
			// 	const [removed] = sourceClone.splice(droppableSource.index, 1);
			//
			// 	destClone.splice(droppableDestination.index, 0, removed);
			//
			// 	const result: any = {};
			// 	result[droppableSource.droppableId] = sourceClone;
			// 	result[droppableDestination.droppableId] = destClone;
			//
			// 	return result;
			// };
		}
	}

	public render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div
					className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary hwk-grid-container--negative-horizontal-spaces-primary'}>
					<div className={'hwk-grid-row'}>
						{this.state.columnList.map((column, index) => (
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

export default DashboardPage;
