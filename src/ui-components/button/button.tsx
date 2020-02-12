import * as React from 'react';
import { IButton } from './button.models';

class Button extends React.Component<IButton> {
	constructor(props: IButton) {
		super(props);
	}

	render() {
		return (
			<button
				className={'jk-button'}
				onClick={this.handleText}>
				{/*{this.props.text}*/}
				{this.props.children}
			</button>
		);
	}

	private handleText() {
		this.props.onClick();
	}
}

export default Button;
