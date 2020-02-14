import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './index/container/index.container';
import Header from '../features/header/header';
import { appRoutesPaths } from './app-routes.constants';
import Task1Page from './task-1/container/task-1.container';
import NotFoundPage from './not-found/container/not-found.container';

const AppRoutes: React.SFC = () => (
	<div>
		<Header />
		<Switch>
			<Route exact path={appRoutesPaths.home} component={IndexPage}/>
			<Route path={appRoutesPaths.task1} component={Task1Page}/>
			<Route component={NotFoundPage}/>
		</Switch>
	</div>
);

export default AppRoutes;
