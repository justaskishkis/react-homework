import { IApiResponseState } from '../../../../../features/api/api.models';

export type IFacilityRequest = string;

export interface IFacilityResponse {
	facility1: number;
	facility2: number;
}

export enum IFacilityActionTypes {
	FACILITY = '[Person Sagas] FACILITY',
	FACILITY_SUCCESS = '[Facility Sagas] FACILITY SUCCESS',
	FACILITY_ERROR = '[Facility Sagas] FACILITY ERROR',
}

export interface IFacilityState extends IApiResponseState {
	readonly data?: IFacilityResponse;
}
