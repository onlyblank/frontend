import { React } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import TaskPage from '../TaskPage';

export default function Routes(){
	return (<Switch>

		<Route path="/task/:id">
			<TaskPage/>
		</Route>

		<Route path="*">
            <NotFound/>
		</Route>
	</Switch>);
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