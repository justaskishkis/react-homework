import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import heroesSaga from '../routing/heroes/state/heroes.sagas';
import { heroesReducer } from '../routing/heroes/state/heroes.reducer';

export const createRootReducer = (history: History) =>
	combineReducers({
		heroes: heroesReducer,
		router: connectRouter(history)
	});

export function* rootSaga() {
	yield all([
		fork(heroesSaga)
	]);
}
