import { Reducer } from 'redux';
import { IFacilityActionTypes, IFacilityState } from './facility.models';
import { initialFacilityState } from './facility.constants';
import { ILoading } from '../../../../../state/app.models';

const reducer: Reducer<IFacilityState> = (state = initialFacilityState, action) => {
	switch (action.type) {
		case IFacilityActionTypes.FACILITY: {
			return {
				data: undefined,
				error: undefined,
				loading: ILoading.LOADING
			};
		}

		case IFacilityActionTypes.FACILITY_SUCCESS: {
			return {
				data: action.payload,
				error: undefined,
				loading: ILoading.LOADING_SUCCESS,
			};
		}

		case IFacilityActionTypes.FACILITY_ERROR: {
			return {
				data: undefined,
				error: action.payload,
				loading: ILoading.LOADING_ERROR,
			};
		}

		default: {
			return state;
		}
	}
};

export { reducer as facilityReducer };

