import useLocalStorage from "./useLocalStorage";

const useFunctions = () => {
	const [todos, setTodos] = useLocalStorage("todos", [
		{
			text: "Write your first ToDo!",
			isCompleted: false
		}
	]);

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
    return {
        todos,
        setTodos,
		addTodo,
		completeTodo,
		removeTodo
	};
};

export default useFunctions;