import { ITaskId } from '../../../../task/state/task.models';

export interface IColumn {
	id: string;
	title: string;
	taskList: ITaskId[];
}
