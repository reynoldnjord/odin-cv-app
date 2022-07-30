import React from "react";
import EducationItem from "./EducationItem";
import { useState } from "react";
import uniqid from "uniqid";

const EducationInfo = () => {
    const [isActive, setIsActive] = useState(false);
	const [schoolName, setSchoolschoolName] = useState({ text: "", id: uniqid() });
	const [preSchoolschoolName, setPreShoolschoolName] = useState([]);

	const [titleStudy, setTitleStudy] = useState({ text: "", id: uniqid() });
	const [preTitleStudy, setPreTitleStudy] = useState([]);

	const [dateStudy, setDateStudy] = useState({ text: "", id: uniqid() });
	const [preDateStudy, setPreDateStudy] = useState([]);

	const handleSchoolNameChange= (e) => {
		setSchoolschoolName((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handleTitleStudyChange = (e) => {
		setTitleStudy((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handleDateStudyChange = (e) => {
		setDateStudy((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const onSubmitSchoolName= (e) => {
		e.preventDefault();
		setSchoolschoolName((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreShoolschoolName(preSchoolschoolName.fill(""));
		setPreShoolschoolName(preSchoolschoolName.concat(schoolName.text));
	};

	const onSubmitTitleStudy = (e) => {
		e.preventDefault();
		setTitleStudy((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreTitleStudy(preTitleStudy.fill(""));
		setPreTitleStudy(preTitleStudy.concat(titleStudy.text));
	};

	const onSubmitDateStudy = (e) => {
		e.preventDefault();
		setDateStudy((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreDateStudy(preDateStudy.fill(""));
		setPreDateStudy(preDateStudy.concat(dateStudy.text));
	};

    const changeState = () => {
        setIsActive(!isActive);
    }
	if (isActive){
		return (
			<div classschoolName="education-info">
				<h1>Education Information</h1>
				<EducationItem
					text="School Name: "
					value={schoolName.text}
					placeholder="Univesity of Arizona"
					onChange={handleSchoolNameChange}
					onSubmit={onSubmitSchoolName}
				/>
				<div>{preSchoolschoolName}</div>
				<EducationItem
					text="Title of Study: "
					value={titleStudy.text}
					placeholder="BS Web Development"
					onChange={handleTitleStudyChange}
					onSubmit={onSubmitTitleStudy}
				/>
				<div>{preTitleStudy}</div>
				<EducationItem
					text="Date of Study: "
					value={dateStudy.text}
					placeholder="2000-2005"
					onChange={handleDateStudyChange}
					onSubmit={onSubmitDateStudy}
				/>
				<div>{preDateStudy}</div>
				<button onClick={changeState}>Done</button>
			</div>
		);
	}
	return <button onClick={changeState}>Edit</button>
};

export default EducationInfo;