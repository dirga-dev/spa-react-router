import "./App.css";
import HomePage from "./pages/home";
import DetailPage from "./pages/detail";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:id" element={<DetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
