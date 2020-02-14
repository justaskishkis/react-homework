import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../../../../features/api/api';
import { apiEndpoints } from '../../../../../features/api/api-endpoints';
import { getExposure, getExposureError, getExposureSuccess } from './exposure.actions';
import { IExposureActionTypes } from './exposure.models';

function* handleExposure(action: ReturnType<typeof getExposure>) {
	const url = apiEndpoints().task1().exposure(action.payload);
	try {
		const res = yield call(get, url);
		if (res.error) {
			yield put(getExposureError(res.error));
		} else {
			yield put(getExposureSuccess(res));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(getExposureError(err.stack));
		} else {
			yield put(getExposureError('An unknown error occured.'));
		}
	}
}

function* watchExposure() {
	yield takeEvery(IExposureActionTypes.EXPOSURE, handleExposure);
}

function* exposureSaga() {
	yield all([
		fork(watchExposure),
	]);
}

export default exposureSaga;
