import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './app/container/app.container';
import * as serviceWorker from './service-worker';
import configureStore from './app/state/app.store-config';
import './assets/css/app.css';

const history = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));

serviceWorker.unregister();
