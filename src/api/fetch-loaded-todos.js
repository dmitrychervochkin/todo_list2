import { changeIsLoading, changeTodos } from "../actions";

export function loadedTodos(searchQuery){
	return (dispatch)=>{
		dispatch(changeIsLoading(true));
		return fetch(`http://localhost:3005/todos?q=${searchQuery}`)
		.then((responce) => responce.json())
		.then((data) => {
			dispatch(changeTodos(data));
		})
		.finally(() => dispatch(changeIsLoading(false)));
	}

};
