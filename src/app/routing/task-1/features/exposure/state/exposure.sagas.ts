import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../../../../features/api/api';
import { apiEndpoints } from '../../../../../features/api/api-endpoints';
import { exposure, exposureError, exposureSuccess } from './exposure.actions';
import { IExposureActionTypes } from './exposure.models';

function* handleExposure(action: ReturnType<typeof exposure>) {
	const url = apiEndpoints().task1().exposure(action.payload);
	try {
		const res = yield call(get, url);
		if (res.error) {
			yield put(exposureError(res.error));
		} else {
			yield put(exposureSuccess(res));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(exposureError(err.stack));
		} else {
			yield put(exposureError('An unknown error occured.'));
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
