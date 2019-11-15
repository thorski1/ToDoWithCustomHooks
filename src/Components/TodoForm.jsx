import React from 'react'
import { Form } from 'semantic-ui-react';
import useFormFunctions from '../Hooks/useFormFunctions';

function TodoForm({ addTodo }) {
	const {value, setValue, handleSubmit} = useFormFunctions(addTodo)

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Add Todo..."
				/>
			</Form.Field>
		</Form>
	);
}

export default TodoForm;