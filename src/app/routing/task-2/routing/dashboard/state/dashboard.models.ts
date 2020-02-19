import { IColumn } from '../features/column/state/column.models';
import { ITaskId } from '../../task/state/task.models';
import { updateDashboard } from './dashboard.actions';

export enum IDashboardActionTypes {
	UPDATE = '[Dashboard Container] UPDATE',
}

export interface IDashboardState {
	data: IColumn[];
}

export interface IDashboardActions {
	updateDashboard: typeof updateDashboard;
}

export type IAllDashboardProps = IDashboardState & IDashboardActions;

export interface IUpdateDashboardRequest {
	targetId: ITaskId;
	sourceIndex: number;
	destinationIndex: number;
	sourceColumnId: string;
	destinationColumnId: string;
}
