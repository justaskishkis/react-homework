import * as React from 'react';

class IndexPage extends React.Component {
	render() {
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--12'}>
						<p>
							Each company has it's own navigation item, as mentioned in each email
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default IndexPage;
