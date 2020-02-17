import { INavigationItem } from '../../../state/app.models';
import { appRoutesPaths } from '../../../routing/app-routes.constants';

// TODO: make it is so it is not needed and use appRoutePaths
export const navigationItems: INavigationItem[] = [
	{
		text: 'Task 1',
		url: appRoutesPaths.task1
	},
	{
		text: 'Task 2',
		url: appRoutesPaths.task2
	},
];
