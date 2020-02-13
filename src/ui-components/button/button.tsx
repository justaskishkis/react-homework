import * as React from 'react';
import { IButton } from './button.models';
// import styles from './button.styl';

class Button extends React.Component<IButton> {
	constructor(props: IButton) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<button
				disabled={!!this.props.disabled}
				type={this.props.type}
				className={'jk-button jk-button--' + this.props.mod}
				onClick={this.handleClick}>
				{this.props.text}
			</button>
		);
	}

	private handleClick() {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}
}

export default Button;
