import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IHeroesProps } from '../state/heroes.models';
import { IAppState } from '../../../state/app.models';
import HeroesListPage from './list/container/list.container';
import HeroesViewPage from './view/container/view.container';

const HeroesPage: React.FC<IHeroesProps> = ({ match }) => {
	return (
		<Switch>
			<Route exact path={`${match.path}/`} component={HeroesListPage}/>
			<Route path={`${match.path}/:name`} component={HeroesViewPage}/>
		</Switch>
	);
};

const mapStateToProps = ({ heroes }: IAppState) => ({
	loading: heroes.loading,
	errors: heroes.errors,
	data: heroes.data
});

export default connect(mapStateToProps)(HeroesPage);
