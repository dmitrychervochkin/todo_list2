import React, { useState } from "react";
import styles from '../../../../../../App.module.css';
import { EditTodo } from './components/edit-todo/EditTodo';
import { useDispatch, useSelector } from "react-redux";
import { selectIsCompleting, selectRefreshTodos } from "../../../../../../selectors";
import { completeTodo, deleteTodo } from "../../../../../../api";

export function TodoItem({ ...props }){
	const [isEdit, setIsEdit] = useState(false);
	const refreshTodos = useSelector(selectRefreshTodos);
	const isCompleting = useSelector(selectIsCompleting);
	const dispatch = useDispatch();

	function handleEdit(){
		setIsEdit((prevState) => !prevState)
	};

	function handleComplete({target}){
		completeTodo(props.id, target.checked, dispatch, isCompleting, refreshTodos)
	};

	function handleDelete({target}){
		dispatch(deleteTodo(target, refreshTodos))
	};

	return(
		<>
			{isEdit ? (
				<EditTodo handleEdit={handleEdit} {...props} />
			) : (
				<li className={styles.TodoTitle}>
					<div className={styles.inputBox}>
						<input
							checked={props.completed}
							type='checkbox'
							id={props.id}
							onChange={handleComplete}
							className={styles.btnInput}
						/>
						<div data-complete={props.completed}>
							{props.title}
						</div>
					</div>
						<div>
							<button
								onClick={handleEdit}
								className={styles.btn}
							>
								Edit
							</button>
							<button
								id={props.id}
								onClick={handleDelete}
								className={styles.btn}
							>
								Delete
							</button>
						</div>
				</li>
			)}
		</>
	)
}
