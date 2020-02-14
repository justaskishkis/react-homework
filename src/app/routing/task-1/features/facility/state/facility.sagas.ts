import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../../../../features/api/api';
import { apiEndpoints } from '../../../../../features/api/api-endpoints';
import { getFacility, getFacilityError, getFacilitySuccess } from './facility.actions';
import { IFacilityActionTypes } from './facility.models';
import { getExposure } from '../../exposure/state/exposure.actions';

function* handleFacility(action: ReturnType<typeof getFacility>) {
	const url = apiEndpoints().task1().facility(action.payload);
	try {
		const res = yield call(get, url);
		if (res.error) {
			yield put(getFacilityError(res.error));
		} else {
			yield put(getFacilitySuccess(res));
			yield put(getExposure(res.facility2));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(getFacilityError(err.stack));
		} else {
			yield put(getFacilityError('An unknown error occured.'));
		}
	}
}

function* watchFacility() {
	yield takeEvery(IFacilityActionTypes.FACILITY, handleFacility);
}

function* facilitySaga() {
	yield all([
		fork(watchFacility),
	]);
}

export default facilitySaga;
