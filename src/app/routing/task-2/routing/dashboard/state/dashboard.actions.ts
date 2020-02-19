import { action } from 'typesafe-actions';
import { IDashboardActionTypes, IUpdateDashboardRequest } from './dashboard.models';

export const updateDashboard =
	(updateDashboardRequest: IUpdateDashboardRequest) => action(IDashboardActionTypes.UPDATE, updateDashboardRequest);
