import { Reducer } from 'redux';
import { IDashboardActionTypes, IDashboardState, IUpdateDashboardRequest } from './dashboard.models';
import { initialDashboardState } from './dashboard.constants';
import { IColumn } from '../features/column/state/column.models';

const reducer: Reducer<IDashboardState> = (state = initialDashboardState, action) => {
	switch (action.type) {
		case IDashboardActionTypes.UPDATE: {
			return {
				data: update(state.data, action.payload)
			};
		}

		default: {
			return state;
		}
	}
};

export { reducer as dashboardReducer };

function update(data: IColumn[], request: IUpdateDashboardRequest): IColumn[] {
	const result = [...data];
	const sameSource = request.sourceColumnId === request.destinationColumnId;
	const sourceColumn = data.filter(item => item.id === request.sourceColumnId)[0];
	const sourceColumnIndex = data.indexOf(sourceColumn);
	const destinationColumn = data.filter(item => item.id === request.destinationColumnId)[0];
	const destinationColumnIndex = data.indexOf(destinationColumn);
	if (sameSource) {
		// UPDATE source column
		const taskList = [...sourceColumn.taskList];
		const [removedTask] = taskList.splice(request.sourceIndex, 1);
		taskList.splice(request.destinationIndex, 0, removedTask);
		const [removedColumn] = result.splice(sourceColumnIndex, 1);
		removedColumn.taskList = taskList;
		result.splice(sourceColumnIndex, 0, removedColumn);
	} else {
		// UPDATE source column
		const sourceTaskList = [...sourceColumn.taskList];
		const [removedTask] = sourceTaskList.splice(request.sourceIndex, 1);
		const [removedSourceColumn] = result.splice(sourceColumnIndex, 1);
		removedSourceColumn.taskList = sourceTaskList;
		result.splice(sourceColumnIndex, 0, removedSourceColumn);

		// UPDATE destination column
		const destinationTaskList = [...destinationColumn.taskList];
		destinationTaskList.splice(request.destinationIndex, 0, removedTask);
		const [removedDestinationColumn] = result.splice(destinationColumnIndex, 1);
		removedDestinationColumn.taskList = destinationTaskList;
		result.splice(destinationColumnIndex, 0, removedDestinationColumn);
	}
	return result;
}

