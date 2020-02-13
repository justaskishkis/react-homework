import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './index/container/index.container';
import HeroesPage from './heroes/routing/heroes.routes';
import Header from '../features/header/header';
import { appRoutesPaths } from './app-routes.constants';

const AppRoutes: React.SFC = () => (
	<div>
		<Header />
		<Switch>
			<Route exact path={appRoutesPaths.home} component={IndexPage}/>
			<Route path={appRoutesPaths.task1} component={HeroesPage}/>
			<Route path={appRoutesPaths.task2} component={HeroesPage}/>
			<Route component={() => <div>Not Found</div>}/>
			// TODO: make not found page
		</Switch>
	</div>
);

export default AppRoutes;
