import { INavigationItem } from '../../../state/app.models';
import { appRoutesPaths } from '../../../routing/app-routes.constants';

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
