import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';
import { IPersonState } from '../routing/task-1/features/person/state/person.models';
import { IFacilityState } from '../routing/task-1/features/facility/state/facility.models';
import { IExposureState } from '../routing/task-1/features/exposure/state/exposure.models';
import { ITasksState } from '../routing/task-2/routing/task/state/task.models';
import { IDashboardState } from '../routing/task-2/routing/dashboard/state/dashboard.models';

export interface IAppState {
	person: IPersonState;
	facility: IFacilityState;
	exposure: IExposureState;
	router: RouterState;
	tasks: ITasksState;
	dashboard: IDashboardState;
}

export interface IApp {
	store: Store<IAppState>;
	history: History;
}

export interface INavigationItem {
	text: string;
	url: string;
}

export enum ILoading {
	LOADING = 'loading',
	LOADING_SUCCESS = 'loadingSuccess',
	LOADING_ERROR = 'loadingError',
}
