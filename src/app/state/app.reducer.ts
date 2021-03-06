import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { personReducer } from '../routing/task-1/features/person/state/person.reducer';
import personSaga from '../routing/task-1/features/person/state/person.sagas';
import { facilityReducer } from '../routing/task-1/features/facility/state/facility.reducer';
import { exposureReducer } from '../routing/task-1/features/exposure/state/exposure.reducer';
import facilitySaga from '../routing/task-1/features/facility/state/facility.sagas';
import exposureSaga from '../routing/task-1/features/exposure/state/exposure.sagas';
import { tasksReducer } from '../routing/task-2/routing/task/state/task.reducer';
import { dashboardReducer } from '../routing/task-2/routing/dashboard/state/dashboard.reducer';

export const createRootReducer = (history: History) =>
	combineReducers({
		person: personReducer,
		facility: facilityReducer,
		exposure: exposureReducer,
		tasks: tasksReducer,
		dashboard: dashboardReducer,
		router: connectRouter(history)
	});

export function* rootSaga() {
	yield all([
		fork(personSaga), fork(facilitySaga), fork(exposureSaga)
	]);
}
