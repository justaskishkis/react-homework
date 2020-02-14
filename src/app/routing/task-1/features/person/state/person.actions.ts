import { action } from 'typesafe-actions';
import { IPersonActionTypes, IPersonRequest, IPersonResponse } from './person.models';
import { IApiError } from '../../../../../features/api/api.models';

export const person = (input: IPersonRequest) => action(IPersonActionTypes.PERSON, input);
export const personSuccess = (data: IPersonResponse) => action(IPersonActionTypes.PERSON_SUCCESS, data);
export const personError = (message: IApiError) => action(IPersonActionTypes.PERSON_ERROR, message);
