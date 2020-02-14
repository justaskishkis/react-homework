import { ILoading } from '../../state/app.models';
import { IPersonResponse } from '../../routing/task-1/features/person/state/person.models';

export interface IApiRequestOptions {
	request?: unknown;
}

export type IApiError = Error | string;

export interface IApiResponseState {
	readonly error?: IApiError;
	readonly loading?: ILoading;
}
