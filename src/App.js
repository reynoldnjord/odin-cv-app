import React from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import PracticalInfo from "./components/PracticalInfo";
import "./styles/App.css";

function App() {
	return (
		<div>
			<EducationInfo />
			<GeneralInfo />
			<PracticalInfo />
		</div>
	);
}

export default App;
