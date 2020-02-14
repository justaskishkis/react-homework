import * as React from 'react';
import Navigation from '../navigation/navigation';
// import styles from './header.styl';

class Header extends React.Component {
	render() {
		return (
			<div className={'hwk-header hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-header__brand hwk-grid-col hwk-grid-col--7 hwk-grid-col--desktop-4'}>
						<h1>React Homework</h1>
					</div>
					<div className={'hwk-header__navigation hwk-grid-col hwk-grid-col--5 hwk-grid-col--desktop-8'}>
						<Navigation/>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
