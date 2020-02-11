import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { createRootReducer, rootSaga } from './app.reducer';
import { IAppState } from './app.models';

export default function configureStore(history: History, initialState: IAppState): Store<IAppState> {
	const composeEnhancers = composeWithDevTools({});
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		createRootReducer(history),
		initialState,
		composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
	);
	sagaMiddleware.run(rootSaga);
	return store;
}
