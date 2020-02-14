import { IApiResponseState } from '../../../../../features/api/api.models';

export type IExposureRequest = string;

export interface IExposureResponse {
	exposure: number;
}

export enum IExposureActionTypes {
	EXPOSURE = '[Facility Sagas] EXPOSURE',
	EXPOSURE_SUCCESS = '[Exposure Sagas] EXPOSURE SUCCESS',
	EXPOSURE_ERROR = '[Exposure Sagas] EXPOSURE ERROR',
}

export interface IExposureState extends IApiResponseState {
	readonly data?: IExposureResponse;
}
