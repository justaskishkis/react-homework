import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { task2RoutesPaths } from './task-2-routes.constants';
import TaskPage from './task/container/task.container';
import DashboardPage from './dashboard/container/dashboard.container';

class Task2Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact={true} path={task2RoutesPaths.home}>
					<Redirect to={task2RoutesPaths.dashboard}/>
				</Route>
				<Route path={task2RoutesPaths.dashboard} component={DashboardPage}/>
				<Route path={`${task2RoutesPaths.task}/:id`} component={TaskPage}/>
				<Redirect to={task2RoutesPaths.dashboard}/>
			</Switch>
		);
	}
}

export default Task2Routes;
