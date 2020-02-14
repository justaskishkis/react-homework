import { Reducer } from 'redux';
import { IExposureActionTypes, IExposureState } from './exposure.models';
import { initialExposureState } from './exposure.constants';
import { ILoading } from '../../../../../state/app.models';

const reducer: Reducer<IExposureState> = (state = initialExposureState, action) => {
	switch (action.type) {
		case IExposureActionTypes.EXPOSURE: {
			return {
				data: undefined,
				error: undefined,
				loading: ILoading.LOADING
			};
		}

		case IExposureActionTypes.EXPOSURE_SUCCESS: {
			return {
				data: action.payload,
				error: undefined,
				loading: ILoading.LOADING_SUCCESS,
			};
		}

		case IExposureActionTypes.EXPOSURE_ERROR: {
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

export { reducer as exposureReducer };

