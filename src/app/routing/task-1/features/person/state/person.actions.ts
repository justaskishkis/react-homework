import { action } from 'typesafe-actions';
import { IPersonActionTypes, IPersonRequest, IPersonResponse } from './person.models';
import { IApiError } from '../../../../../features/api/api.models';

export const getPerson = (input: IPersonRequest) => action(IPersonActionTypes.PERSON, input);
export const getPersonSuccess = (data: IPersonResponse) => action(IPersonActionTypes.PERSON_SUCCESS, data);
export const getPersonError = (message: IApiError) => action(IPersonActionTypes.PERSON_ERROR, message);
