import { ILoading } from '../../../state/app.models';
import { IApiError } from '../../../features/api/api.models';
import { IPersonResponse } from '../features/person/state/person.models';
import { IFacilityResponse } from '../features/facility/state/facility.models';
import { IExposureResponse } from '../features/exposure/state/exposure.models';
import { RouteComponentProps } from 'react-router';
import { getPerson } from '../features/person/state/person.actions';

export interface ITask1FormState {
	formControls: ITask1FormControls;
}

export interface ITask1FormControls {
	inputField: ITask1InputField;
}

export interface ITask1InputField {
	name: string;
	id: string;
	value: string;
	label: string;
	placeholder: string;
	valid: boolean;
	touched: boolean;
	validationRules: ITask1ValidationRules;
}

export interface ITask1ValidationRules {
	minLength: number;
	maxLength: number;
	isRequired: boolean;
}

interface ITask1Props {
	personLoading?: ILoading;
	personError?: IApiError;
	personData?: IPersonResponse;
	facilityLoading?: ILoading;
	facilityError?: IApiError;
	facilityData?: IFacilityResponse;
	exposureLoading?: ILoading;
	exposureError?: IApiError;
	exposureData?: IExposureResponse;
}

interface IPropsFromPerson {
	getPerson: typeof getPerson;
}

export type IAllTask1Props = ITask1Props & IPropsFromPerson & RouteComponentProps;
