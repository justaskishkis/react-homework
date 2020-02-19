import { IDashboardState } from './dashboard.models';

export const initialDashboardState: IDashboardState = {
	data: [
		{
			id: 'column-1',
			title: 'Column 1 title',
			taskList: ['task-1']
		},
		{
			id: 'column-2',
			title: 'Column 2 title',
			taskList: ['task-2']
		}
	]
};
