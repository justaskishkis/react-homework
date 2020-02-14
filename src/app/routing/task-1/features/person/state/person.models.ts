import { IApiResponseState } from '../../../../../features/api/api.models';

export type IPersonRequest = string;

export interface IPersonResponse {
	person1: string;
	person2: string;
}

export enum IPersonActionTypes {
	PERSON = '[Task 1 Container] PERSON',
	PERSON_SUCCESS = '[Person Sagas] PERSON SUCCESS',
	PERSON_ERROR = '[Person Sagas] PERSON ERROR',
}

export interface IPersonState extends IApiResponseState {
	readonly data?: IPersonResponse;
}
