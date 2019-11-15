import React from "react";
import {
	Container,
	Header,
	List,
	Segment,
	Divider
} from "semantic-ui-react";

import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";
import useFunctions from "./Hooks/useFunctions";

function App() {
	const {
		todos,
		addTodo,
		completeTodo,
		removeTodo
	} = useFunctions();
	return (
		<Container>
			<Segment stacked size="massive" color="blue" secondary inverted style={{width: "80%", margin: "auto", marginTop: "5%"}}>
				<Header as="h1" textAlign="center">
					Hooked Up Todo List
				</Header>
				<List verticalAlign="middle" celled>
					{todos.map((todo, index) => (
						<Todo
							key={index}
							index={index}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>
					))}
					<Divider section />
					<TodoForm addTodo={addTodo} />
				</List>
			</Segment>
		</Container>
	);
}

export default App;
