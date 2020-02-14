import { action } from 'typesafe-actions';
import { IFacilityActionTypes, IFacilityRequest, IFacilityResponse } from './facility.models';
import { IApiError } from '../../../../../features/api/api.models';

export const facility = (person: IFacilityRequest) => action(IFacilityActionTypes.FACILITY, person);
export const facilitySuccess = (data: IFacilityResponse) => action(IFacilityActionTypes.FACILITY_SUCCESS, data);
export const facilityError = (message: IApiError) => action(IFacilityActionTypes.FACILITY_ERROR, message);
