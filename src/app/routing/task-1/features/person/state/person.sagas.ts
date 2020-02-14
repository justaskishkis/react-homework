import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../../../../features/api/api';
import { apiEndpoints } from '../../../../../features/api/api-endpoints';
import { getPerson, getPersonError, getPersonSuccess } from './person.actions';
import { IPersonActionTypes } from './person.models';
import { getFacility } from '../../facility/state/facility.actions';

function* handlePerson(action: ReturnType<typeof getPerson>) {
	const url = apiEndpoints().task1().person(action.payload);
	try {
		const res = yield call(get, url);
		if (res.error) {
			yield put(getPersonError(res.error));
		} else {
			yield put(getPersonSuccess(res));
			yield put(getFacility(res.person1));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(getPersonError(err.stack));
		} else {
			yield put(getPersonError('An unknown error occurred.'));
		}
	}
}

function* watchPerson() {
	yield takeEvery(IPersonActionTypes.PERSON, handlePerson);
}

function* personSaga() {
	yield all([
		fork(watchPerson),
	]);
}

export default personSaga;
