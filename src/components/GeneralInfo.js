import React from "react";
import GeneralItem from "./GeneralItem";
import { useState } from "react";
import uniqid from "uniqid";

const GeneralInfo = () => {
    const [isActive, setIsActive] = useState(false);
	const [name, setName] = useState({ text: "", id: uniqid() });
	const [preName, setPreName] = useState([]);

	const [email, changeEmail] = useState({ text: "", id: uniqid() });
	const [preEmail, setPreEmail] = useState([]);

	const [phoneNumber, setPhoneNumber] = useState({ text: "", id: uniqid() });
	const [prePhoneNumber, setPrePhoneNumber] = useState([]);

	const handleNameChange = (e) => {
		setName((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handleEmailChange = (e) => {
		changeEmail((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber((prevState) => {
			return { ...prevState, text: e.target.value };
		});
	};

	const onSubmitName = (e) => {
		e.preventDefault();
		setName((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreName(preName.fill(""));
		setPreName(preName.concat(name.text));
	};

	const onSubmitEmail = (e) => {
		e.preventDefault();
		changeEmail((prevState) => {
			return { ...prevState, text: "" };
		});
		setPreEmail(preEmail.fill(""));
		setPreEmail(preEmail.concat(email.text));
	};

	const onSubmitPhoneNumber = (e) => {
		e.preventDefault();
		setPhoneNumber((prevState) => {
			return { ...prevState, text: "" };
		});
		setPrePhoneNumber(prePhoneNumber.fill(""));
		setPrePhoneNumber(prePhoneNumber.concat(phoneNumber.text));
	};

    const changeState = () => {
        setIsActive(!isActive);
    }
    
    if (isActive) {
        return (
            <div classschoolName="education-info">
                <h1>General Information</h1>
                <GeneralItem
                    text="Name: "
                    value={name.text}
                    placeholder="Jack"
                    onChange={handleNameChange}
                    onSubmit={onSubmitName}
                />
                <div>{preName}</div>
                <GeneralItem
                    text="Email: "
                    value={email.text}
                    placeholder="someone@example.com"
                    onChange={handleEmailChange}
                    onSubmit={onSubmitEmail}
                />
                <div>{preEmail}</div>
                <GeneralItem
                    text="Phone Number: "
                    value={phoneNumber.text}
                    placeholder="234-300-4563"
                    onChange={handlePhoneNumberChange}
                    onSubmit={onSubmitPhoneNumber}
                />
                <div>{prePhoneNumber}</div>
                <button onClick={changeState}>Done</button>
            </div>
        );
    }
    return <button onClick={changeState}>Edit</button>
};

export default GeneralInfo;
