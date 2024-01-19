import { changeIsLoading, changeTodos } from "../actions";

export function loadedTodos(dispatch, searchQuery){
	dispatch(changeIsLoading(true));
	fetch(`http://localhost:3005/todos?q=${searchQuery}`)
		.then((responce) => responce.json())
		.then((data) => {
			dispatch(changeTodos(data));
		})
		.finally(() => dispatch(changeIsLoading(false)));
};
