import * as React from 'react';
import { IHeader } from './header.models';
import Navigation from '../navigation/navigation';

const Header: React.SFC<IHeader> = ({ title }) => (
	<div>
		<div>{title}</div>
		<Navigation/>
	</div>
);

export default Header;
