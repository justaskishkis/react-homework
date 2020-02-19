import { Reducer } from 'redux';
import { IDashboardActionTypes, IDashboardState, IUpdateDashboardRequest } from './dashboard.models';
import { initialDashboardState } from './dashboard.constants';
import { IColumn } from '../features/column/state/column.models';

const reducer: Reducer<IDashboardState> = (state = initialDashboardState, action) => {
	switch (action.type) {
		case IDashboardActionTypes.UPDATE: {
			return {
				data: update(state.data, action.payload),
			};
		}

		default: {
			return state;
		}
	}
};

export { reducer as dashboardReducer };

function update(data: IColumn[], request: IUpdateDashboardRequest): IColumn[] {
	console.log('reducer', request);
	// if (sameSource) {
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
	// } else {
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
	// }
	return data;
}

