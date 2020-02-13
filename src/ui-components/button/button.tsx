import * as React from 'react';
import { IButton } from './button.models';
// TODO: implement story book for all ui components
// import styles from './button.styl';

class Button extends React.Component<IButton> {
	render() {
		return (
			<button
				className={'jk-button'}
				onClick={this.handleText}>
				{this.props.text}
			</button>
		);
	}

	handleText = () => {
		this.props.onClick();
	}
}

export default Button;
