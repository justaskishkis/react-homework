import { RouteComponentProps } from 'react-router';

export interface ITask {
	id: ITaskId;
	title: string;
	description: string;
}

export type ITaskId = string;

export interface ITasksState {
	data: ITask[];
}

export interface ITaskParams {
	id: ITaskId;
}

export type IAllTaskProps = ITasksState & RouteComponentProps;
