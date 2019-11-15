import React from "react";
import { List, Button, Icon } from "semantic-ui-react";
import { HoverPress } from "../HoverPress";

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<List.Item
			style={{
				textDecoration: todo.isCompleted
					? "line-through red"
					: "",
				borderTop: "2px solid black",
				backgroundColor: "white",
				color: "black"
			}}
		>
			{todo.text}
			<List.Content floated="right">
				{!todo.isCompleted ? (
					<Button.Group>
						<HoverPress>
							<Button
								animated="fade"
								positive
								onClick={() => completeTodo(index)}
							>
								<Button.Content visible>
									Complete
								</Button.Content>
								<Button.Content hidden>
									<Icon name="check" />
								</Button.Content>
							</Button>
						</HoverPress>
						<Button.Or />
						<HoverPress>
							<Button
								animated="fade"
								onClick={() => removeTodo(index)}
								negative
							>
								<Button.Content visible>
									Remove
								</Button.Content>
								<Button.Content hidden>
									<Icon name="x" />
								</Button.Content>
							</Button>
						</HoverPress>
					</Button.Group>
				) : (
					<HoverPress>
						<Button
							animated="fade"
							onClick={() => removeTodo(index)}
							negative
						>
							<Button.Content visible>
								Remove
							</Button.Content>
							<Button.Content hidden>
								<Icon name="x" />
							</Button.Content>
						</Button>
					</HoverPress>
				)}
			</List.Content>
		</List.Item>
	);
}

export default Todo;
