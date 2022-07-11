import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskPage from "./components/TaskPage"

import "./reset.css"
import "./variables.css"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="tasks/:id" element={<TaskPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
