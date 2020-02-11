import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AppRoutes from '../routing/app.routes';
import { IApp } from '../state/app.models';

const App: React.FC<IApp> = ({ store, history }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<AppRoutes/>
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
