import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../state/navigation.constants';
import { appRoutesPaths } from '../../../routing/app-routes.constants';
// import styles from './navigation.styl';

class Navigation extends React.Component<{}> {
	render() {
		return (
			<div className={'hwk-navigation'}>
				<NavLink
					exact
					to={appRoutesPaths.home}
					className={'hwk-navigation__item'}
					activeClassName='hwk-navigation__item--active'>
					Home
				</NavLink>
				{navigationItems.map(item => (
					<NavLink
						key={item.url}
						to={item.url}
						className={'hwk-navigation__item'}
						activeClassName='hwk-navigation__item--active'>
						{item.text}
					</NavLink>
				))}
			</div>
		);
	}
}

export default Navigation;

