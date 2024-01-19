import { changeNote, changeRefreshTodos } from '../actions';

export function addTodo(note){
	return (dispatch) => {
		return fetch(`http://localhost:3005/todos`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({
					title: note,
					completed: false,
				})
			})
			.then((responce) => responce.json())
			.then((data) => {
				dispatch({
					type: 'ADD_TODO',
					payload: data,
				})
				dispatch(changeRefreshTodos(data))
			})
			.finally(() => {
				dispatch(changeNote(''));
			});
	};
};



