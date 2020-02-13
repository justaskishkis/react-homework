import * as React from 'react';
// import styles from './card.styl';

class Card extends React.Component {
	render() {
		return (
			<div className='jk-card'>
				{this.props.children}
			</div>
		);
	}
}

export default Card;
