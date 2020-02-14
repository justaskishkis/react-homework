import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../../../../features/api/api';
import { apiEndpoints } from '../../../../../features/api/api-endpoints';
import { facility, facilityError, facilitySuccess } from './facility.actions';
import { IFacilityActionTypes } from './facility.models';

function* handleFacility(action: ReturnType<typeof facility>) {
	const url = apiEndpoints().task1().facility(action.payload);
	try {
		const res = yield call(get, url);
		if (res.error) {
			yield put(facilityError(res.error));
		} else {
			yield put(facilitySuccess(res));
		}
	} catch (err) {
		if (err instanceof Error && err.stack) {
			yield put(facilityError(err.stack));
		} else {
			yield put(facilityError('An unknown error occured.'));
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
