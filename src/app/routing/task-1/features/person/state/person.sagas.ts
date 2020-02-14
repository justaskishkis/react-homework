import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../../../../features/api/api';
import { apiEndpoints } from '../../../../../features/api/api-endpoints';
import { person, personError, personSuccess } from './person.actions';
import { IPersonActionTypes } from './person.models';

function* handlePerson(action: ReturnType<typeof person>) {
	const url = apiEndpoints().task1().person(action.payload);
	try {
		const res = yield call(get, url);
		if (res.error) {
			yield put(personError(res.error));
		} else {
			yield put(personSuccess(res));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(personError(err.stack));
		} else {
			yield put(personError('An unknown error occured.'));
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
