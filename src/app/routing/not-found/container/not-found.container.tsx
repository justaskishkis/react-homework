import * as React from 'react';

class NotFoundPage extends React.Component {
	render() {
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--12'}>
						Page not found
					</div>
				</div>
			</div>
		);
	}
}

export default NotFoundPage;
