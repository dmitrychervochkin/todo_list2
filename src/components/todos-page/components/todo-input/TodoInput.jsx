import React from "react";
import styles from '../../../../App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectNote } from "../../../../selectors";
import { changeNote } from "../../../../actions";
import { addTodo } from "../../../../api/fetch-add-todo";

export function TodoInput(){
	const note = useSelector(selectNote);
	const dispatch = useDispatch();

	function handleChange({target}){
		dispatch(changeNote(target.value))
	};

	function handleAdd(){
		if (note !== '') {
			dispatch(addTodo(note))
		};
	};

	return(
		<>
			<input
				value={note}
				onChange={handleChange}
				className={styles.TodoInput}
				placeholder='Введите новую задачу...'
			></input>
			<button
				className={styles.AddBtn}
				onClick={handleAdd}
			>
				Добавить новую задачу
			</button>
		</>

	)
};
