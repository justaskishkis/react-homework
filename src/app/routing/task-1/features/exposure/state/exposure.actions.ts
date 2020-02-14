import { action } from 'typesafe-actions';
import { IExposureActionTypes, IExposureRequest, IExposureResponse } from './exposure.models';
import { IApiError } from '../../../../../features/api/api.models';

export const getExposure = (facility: IExposureRequest) => action(IExposureActionTypes.EXPOSURE, facility);
export const getExposureSuccess = (data: IExposureResponse) => action(IExposureActionTypes.EXPOSURE_SUCCESS, data);
export const getExposureError = (message: IApiError) => action(IExposureActionTypes.EXPOSURE_ERROR, message);
