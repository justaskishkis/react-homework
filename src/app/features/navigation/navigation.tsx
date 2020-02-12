import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { INavigation } from './navigation.models';

const Navigation: React.SFC<INavigation> = ({}) => (
	<div>
		<NavLink exact to='/' activeClassName='is-active'>
			Home
		</NavLink>
		<NavLink to='/heroes' activeClassName='is-active'>
			Heroes
		</NavLink>
	</div>
);

export default Navigation;
