import React from "react";
import { TodoItem } from './components/todo-item/TodoItem';
import { useSelector } from "react-redux";
import { selectTodos } from "../../../../selectors";

export function TodoList(){
	const todos = useSelector(selectTodos);

	return (
		<ul>
			{todos?.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
				/>
			))}
		</ul>
	);
};
