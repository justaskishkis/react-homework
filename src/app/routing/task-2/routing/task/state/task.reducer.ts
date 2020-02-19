import { Reducer } from 'redux';
import { ITasksState } from './task.models';
import { initialTasksState } from './task.constants';

const reducer: Reducer<ITasksState> = (state = initialTasksState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export { reducer as tasksReducer };

