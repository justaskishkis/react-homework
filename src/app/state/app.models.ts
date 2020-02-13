import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';
import { IHeroesState } from '../routing/heroes/state/heroes.models';

export interface IAppState {
	heroes: IHeroesState;
	router: RouterState;
}

export interface IApp {
	store: Store<IAppState>;
	history: History;
}

export interface INavigationItem {
	text: string;
	url: string;
}
