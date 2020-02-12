import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './index/container/index.container';
import HeroesPage from './heroes/routing/heroes.routes';
import Header from '../features/header/header';

const AppRoutes: React.SFC = () => (
	<div>
		<Header title='Pavadinimas' />
		<Switch>
			<Route exact path='/' component={IndexPage}/>
			<Route path='/heroes' component={HeroesPage}/>
			<Route component={() => <div>Not Found</div>}/>
			// TODO: make not found page
		</Switch>
	</div>
);

export default AppRoutes;
