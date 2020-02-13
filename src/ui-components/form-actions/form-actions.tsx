import * as React from 'react';
// import styles from './form-actions.styl';

class FormActions extends React.Component {
	render() {
		return (
			<div className='jk-form__actions'>
				{this.props.children}
			</div>
		);
	}
}

export default FormActions;
