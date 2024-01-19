import { changeRefreshTodos, changeIsCompleting } from "../actions";

export function completeTodo(id, bool, isCompleting, refreshTodos){
	return (dispatch) => {
		return fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({
					completed: bool,
				})

			})
			.then((rawResponce) => rawResponce.json())
			.then((response) => {
				dispatch(changeRefreshTodos(!refreshTodos));
			})
			.finally(() => {
				dispatch(changeIsCompleting(!isCompleting));
			})
	}
}
