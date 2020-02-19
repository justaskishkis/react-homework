import { ITask, ITaskId } from '../../../../task/state/task.models';

export interface IAllDashboardTaskProps {
	taskId: ITaskId;
	index: number;
	data: ITask[];
}
