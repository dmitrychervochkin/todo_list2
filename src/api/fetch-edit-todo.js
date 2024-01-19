import { changeTodos } from "../actions";

export function editTodo(id, payLoad, todos){
	return (dispatch) => {
		return fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json;charset=utf-8'},
			body: JSON.stringify({ ...payLoad })
		})
			.then((responce) => responce.json())
			.then((data) => {
				const todosIndex = todos.findIndex((prod) => prod.id === id);
				const copyData = todos.slice();
				copyData[todosIndex] = data;
				dispatch(changeTodos(copyData));
			})
	}

};
