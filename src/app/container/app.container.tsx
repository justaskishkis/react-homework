import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AppRoutes from '../routing/app-routes';
import { IApp } from '../state/app.models';

class App extends React.Component<IApp> {
	render() {
		return (
			<Provider store={this.props.store}>
				<ConnectedRouter history={this.props.history}>
					<AppRoutes/>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;

