import React, { useEffect } from "react";
import styles from '../../App.module.css';
import { useDebounce } from "../../hooks/useDebounce.jsx";
import { InputSearch } from "./components/input-search/InputSearch.jsx";
import { TodoList } from "./components/todo-list/TodoList.jsx";
import { TodoInput } from "./components/todo-input/TodoInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
	selectTodos,
	selectIsCompleting,
	selectIsLoading,
	selectNote,
	selectRefreshTodos,
	selectSearchQuery,
	selectSort
} from '../../selectors'
import { changeIsLoading } from "../../actions";
import { loadedTodos, sortTodos } from "../../api";

export function TodosPage(){
	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);
	const searchQuery = useSelector(selectSearchQuery);
	const note = useSelector(selectNote);
	const refreshTodos = useSelector(selectRefreshTodos);
	const sort = useSelector(selectSort);
	const isCompleting = useSelector(selectIsCompleting);
	const dispatch = useDispatch();
	const debounceValue = useDebounce(searchQuery, 500);


	function handleSort(){
		sortTodos(sort, dispatch);
	};

	useEffect(() => {
		dispatch(changeIsLoading(true));
		loadedTodos(dispatch, searchQuery);
	}, [debounceValue, refreshTodos]);

	return(
		<div>
			<div className={styles.others}>
				<InputSearch />
				<button onClick={handleSort} className={styles.sortBtn}>Sort cases</button>
			</div>

			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<TodoInput />
					<TodoList />
				</>
					)}
		</div>
	)

};

