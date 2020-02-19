import { ITasksState } from './task.models';

export const initialTasksState: ITasksState = {
	data: [
		{
			id: 'task-1',
			title: 'Task 1 title',
			description: 'Task 1 description',
		},
		{
			id: 'task-2',
			title: 'Task 2 title',
			description: 'Task 2 description',
		},
	]
};

