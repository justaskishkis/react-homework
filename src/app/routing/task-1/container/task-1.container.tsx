import * as React from 'react';
import Card from '../../../../ui-components/card/card';
import Task1Form from '../features/form/container/form.container';
import { IAppState, ILoading } from '../../../state/app.models';
import { connect } from 'react-redux';
import { IAllTask1Props } from '../state/task-1.models';
import { getPerson } from '../features/person/state/person.actions';
import Loading from '../../../../ui-components/loading/loading';

class Task1Page extends React.Component<IAllTask1Props> {
	constructor(props: IAllTask1Props) {
		super(props);
		this.handleSubmitted = this.handleSubmitted.bind(this);
		this.renderData = this.renderData.bind(this);
	}

	render() {
		const {
			personLoading, facilityLoading, exposureLoading
		} = this.props;
		const loading =
			personLoading === ILoading.LOADING ||
			facilityLoading === ILoading.LOADING ||
			exposureLoading === ILoading.LOADING;
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--6'}>
						<Card>
							<Task1Form submitted={this.handleSubmitted} disabled={loading}/>
						</Card>
					</div>
					<div className={'hwk-grid-col hwk-grid-col--6'}>
						<h2>
							Result:
						</h2>
						<div className='hwk-task-1__result'>
							{loading && (
								<Loading />
							)}
							{this.renderData(loading)}
						</div>
					</div>
				</div>
			</div>
		);
	}

	private renderData(loading: boolean) {
		const {
			facilityData, exposureData
		} = this.props;
		const facility2 = facilityData ? facilityData.facility2 : undefined;
		const exposure = exposureData ? exposureData.exposure : undefined;
		const result = (facility2 && exposure) ? (facility2 * exposure) : undefined;
		return (
			<div>
				{!loading ? result : undefined}
			</div>
		);
	}

	private handleSubmitted(input: string) {
		const { getPerson: getData } = this.props;
		getData(input);
	}
}

const mapStateToProps = ({ person, facility, exposure }: IAppState) => ({
	personLoading: person.loading,
	personError: person.error,
	personData: person.data,
	facilityLoading: facility.loading,
	facilityError: facility.error,
	facilityData: facility.data,
	exposureLoading: exposure.loading,
	exposureError: exposure.error,
	exposureData: exposure.data
});

const mapDispatchToProps = {
	getPerson
};

export default connect(mapStateToProps, mapDispatchToProps)(Task1Page);
