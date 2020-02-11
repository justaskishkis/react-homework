import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../../features/api/api';
import { API_ENDPOINT } from '../../../features/api/api-endpoints';
import { IHeroesActionTypes } from './heroes.models';
import { fetchError, fetchSuccess } from './heroes.actions';

function* handleFetch() {
	try {
		const res = yield call(callApi, 'get', API_ENDPOINT, '/heroStats');
		if (res.error) {
			yield put(fetchError(res.error));
		} else {
			yield put(fetchSuccess(res));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(fetchError(err.stack));
		} else {
			yield put(fetchError('An unknown error occured.'));
		}
	}
}

function* watchFetchRequest() {
	yield takeEvery(IHeroesActionTypes.FETCH_REQUEST, handleFetch);
}

function* heroesSaga() {
	yield all([fork(watchFetchRequest)]);
}

export default heroesSaga;
