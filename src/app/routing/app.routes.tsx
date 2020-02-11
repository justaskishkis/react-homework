import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './index/container/index.container';
import HeroesPage from './heroes/routing/heroes.routes';

const AppRoutes: React.SFC = () => (
	<Switch>
		<Route exact path='/' component={IndexPage}/>
		<Route path='/heroes' component={HeroesPage}/>
		<Route component={() => <div>Not Found</div>}/>
		// TODO: make not found page
	</Switch>
);

export default AppRoutes;
