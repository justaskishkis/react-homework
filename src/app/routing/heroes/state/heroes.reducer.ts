import { Reducer } from 'redux';
import { IHeroesState, IHeroesActionTypes } from './heroes.models';
import { heroesInitialState } from './heroes.constants';

const reducer: Reducer<IHeroesState> = (state = heroesInitialState, action) => {
	switch (action.type) {
		case IHeroesActionTypes.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case IHeroesActionTypes.FETCH_SUCCESS: {
			return { ...state, loading: false, data: action.payload };
		}
		case IHeroesActionTypes.FETCH_ERROR: {
			return { ...state, loading: false, errors: action.payload };
		}
		default: {
			return state;
		}
	}
};

export { reducer as heroesReducer };
