import { changeTodos, changeSort } from "../actions";

export function sortTodos(sort, dispatch){
	let sortTitle = '?_sort=title';
	sort ? sortTitle = '?_sort=title' : sortTitle = '';
	fetch(`http://localhost:3005/todos${sortTitle}`)
		.then((responce) => responce.json)
		.then((data) => {
			dispatch(changeTodos(data));
		})
		.finally(() => {
			dispatch(changeSort(!sort));
		});

};
