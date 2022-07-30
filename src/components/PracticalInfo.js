import React from "react";
import PracticalItem from "./PracticalItem";
import { useState } from "react";
import uniqid from "uniqid";

const PracticalInfo = () => {
    const [isActive, setIsActive] = useState(false);
	const [companyName, setCompanyName] = useState({ text: "", id: uniqid() });
	const [preCompanyName, setPreCompanyName] = useState([]);

	const [positionTitle, setPositionTitle] = useState({
		text: "",
		id: uniqid(),
	});
	const [prePositionTitle, setPrePositionTitle] = useState([]);

	const [mainTasks, setMainTasks] = useState({ text: "", id: uniqid() });
	const [preMainTasks, setPreMainTasks] = useState([]);

	const [dateWork, setDateWork] = useState({ text: "", id: uniqid() });
	const [preDateWork, setPreDateWork] = useState([]);

	const handlecompanyNameChange = (e) => {
		setCompanyName((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handlePositionTitleChange = (e) => {
		setPositionTitle((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handleMainTasksChange = (e) => {
		setMainTasks((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handleDateWorkChange = (e) => {
		setDateWork((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const onSubmitCompanyName = (e) => {
		e.preventDefault();
		setCompanyName((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreCompanyName(preCompanyName.fill(""));
		setPreCompanyName(preCompanyName.concat(companyName.text));
	};

	const onSubmitPostionTitle = (e) => {
		e.preventDefault();
		setPositionTitle((prevState) => {
			return { ...prevState, text: "" };
		});
		setPrePositionTitle(prePositionTitle.fill(""));
		setPrePositionTitle(prePositionTitle.concat(positionTitle.text));
	};

	const onSubmitMainTasks = (e) => {
		e.preventDefault();
		setMainTasks((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreMainTasks(preMainTasks.fill(""));
		setPreMainTasks(preMainTasks.concat(mainTasks.text));
	};

	const onSubmitDateWork = (e) => {
		e.preventDefault();
		setDateWork((prevState) => {
			return { ...prevState, text: "" };
		});
		setDateWork(preMainTasks.fill(""));
		setPreDateWork(preMainTasks.concat(mainTasks.text));
	};

    const changeState = () => {
        setIsActive(!isActive);
    }
    if (isActive) {
        return (
            <div classcompanyName="education-info">
                <h1>Practical Information</h1>
                <PracticalItem
                    text="Company Name: "
                    value={companyName.text}
                    placeholder="Volkswagen"
                    onChange={handlecompanyNameChange}
                    onSubmit={onSubmitCompanyName}
                />
                <div className="education-item">{preCompanyName}</div>
                <PracticalItem
                    text="Position Title: "
                    value={positionTitle.text}
                    placeholder="General Manager"
                    onChange={handlePositionTitleChange}
                    onSubmit={onSubmitPostionTitle}
                />
                <div className="education-item">{prePositionTitle}</div>
                <PracticalItem
                    text="Main Tasks: "
                    value={mainTasks.text}
                    placeholder="Cleaning the web history"
                    onChange={handleMainTasksChange}
                    onSubmit={onSubmitMainTasks}
                />
                <div>{preMainTasks}</div>
                <PracticalItem
                    text="Date from and until when you worked for that company: "
                    value={dateWork.text}
                    placeholder="1998-2003"
                    onChange={handleDateWorkChange}
                    onSubmit={onSubmitDateWork}
                />
                <div className="education-item">{preDateWork}</div>
                <button onClick={changeState}>Done</button>
            </div>
        );
    }
    return <button onClick={changeState}>Edit</button>
};

export default PracticalInfo;
