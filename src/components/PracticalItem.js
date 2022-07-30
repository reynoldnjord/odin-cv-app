import React from "react";

const PracticalItem = ({ text, value, onChange, placeholder, onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<label>{text}</label>
			<input value={value} onChange={onChange} placeholder={placeholder} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default PracticalItem;