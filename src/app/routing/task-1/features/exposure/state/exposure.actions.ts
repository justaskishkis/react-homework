import { action } from 'typesafe-actions';
import { IExposureActionTypes, IExposureRequest, IExposureResponse } from './exposure.models';
import { IApiError } from '../../../../../features/api/api.models';

export const exposure = (facility: IExposureRequest) => action(IExposureActionTypes.EXPOSURE, facility);
export const exposureSuccess = (data: IExposureResponse) => action(IExposureActionTypes.EXPOSURE_SUCCESS, data);
export const exposureError = (message: IApiError) => action(IExposureActionTypes.EXPOSURE_ERROR, message);
