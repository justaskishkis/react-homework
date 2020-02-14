import { action } from 'typesafe-actions';
import { IFacilityActionTypes, IFacilityRequest, IFacilityResponse } from './facility.models';
import { IApiError } from '../../../../../features/api/api.models';

export const getFacility = (person: IFacilityRequest) => action(IFacilityActionTypes.FACILITY, person);
export const getFacilitySuccess = (data: IFacilityResponse) => action(IFacilityActionTypes.FACILITY_SUCCESS, data);
export const getFacilityError = (message: IApiError) => action(IFacilityActionTypes.FACILITY_ERROR, message);
