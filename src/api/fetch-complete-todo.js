import { changeRefreshTodos, changeIsCompleting } from "../actions";

export function completeTodo(id, bool, dispatch, isCompleting, refreshTodos){
	fetch(`http://localhost:3005/todos/${id}`, {
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
