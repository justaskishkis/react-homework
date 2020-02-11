import { action } from 'typesafe-actions';
import { IHeroesActionTypes, IHero } from './heroes.models';

export const fetchRequest = () => action(IHeroesActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: IHero[]) => action(IHeroesActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(IHeroesActionTypes.FETCH_ERROR, message);
