import { changeRefreshTodos } from "../actions"

export function deleteTodo(target, refreshTodos){
	return (dispatch) => {
		return fetch(`http://localhost:3005/todos/${target.id}`, {
				method: 'DELETE'
			})
			.then((responce) => responce.json())
			.then((data) => {
				dispatch(changeRefreshTodos(!refreshTodos))
			});
	};
};
