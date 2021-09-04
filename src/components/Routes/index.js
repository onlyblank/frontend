import { React } from 'react';
import { Route, Switch, Redirect, useParams, useLocation } from 'react-router-dom';
import TaskPage from '../TaskPage';

export default function Routes(){
	return (<Switch>
		{/*<Route path="/task/:id/:theme">
				<TaskPage></TaskPage>
		</Route>*/}

		<Route path="/task/:id">
			<TaskPage/>
			{/*<TaskRedirect/>*/}
		</Route>

		<Route path="*">
            <NotFound/>
		</Route>
	</Switch>);
}

// Use after implementing themes.
function TaskRedirect(){
	const { id } = useParams();
	return (<Redirect to={`/task/${id}/default`}></Redirect>);
}

function NotFound() {
	let location = useLocation();
  
	return (
	  <div>
		<h3>
		  No match for <code>{location.pathname}</code>
		</h3>
	  </div>
	);
  }