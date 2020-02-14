import { Reducer } from 'redux';
import { IPersonActionTypes, IPersonState } from './person.models';
import { initialPersonState } from './person.constants';
import { ILoading } from '../../../../../state/app.models';

const reducer: Reducer<IPersonState> = (state = initialPersonState, action) => {
	switch (action.type) {
		case IPersonActionTypes.PERSON: {
			return {
				data: undefined,
				error: undefined,
				loading: ILoading.LOADING
			};
		}

		case IPersonActionTypes.PERSON_SUCCESS: {
			return {
				data: action.payload,
				error: undefined,
				loading: ILoading.LOADING_SUCCESS,
			};
		}

		case IPersonActionTypes.PERSON_ERROR: {
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

export { reducer as personReducer };

