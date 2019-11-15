import { useState } from "react";

const useFormFunctions = addTodo => {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};
	return {
		value,
		setValue,
		handleSubmit
	};
};

export default useFormFunctions;
