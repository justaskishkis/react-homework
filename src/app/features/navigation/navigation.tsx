import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../ui-components/button/button';

function Navigation() {
	const handleClick = function() {
		console.log('clicked');
	};

	return (
		<div>
			<Button text='Click me' onClick={handleClick}>
				Click me
			</Button>
			<NavLink exact to='/' activeClassName='is-active'>
				Home
			</NavLink>
			<NavLink to='/heroes' activeClassName='is-active'>
				Heroes
			</NavLink>
		</div>
	);
}

export default Navigation;

