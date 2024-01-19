import React, {useState, useEffect} from "react";
import * as yup from 'yup';
import {TextField} from './components/text-field/TextField';
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../../../../../../../selectors";
import { editTodo } from "../../../../../../../../api";

const validateSchema = yup.object().shape({});
function parceYupError(){};

export function EditTodo({handleEdit, ...props }){
	const [error, setError] = useState({});
	const [value, setValue] = useState({...props});
	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	function handleChange(event){
		const {id, value} = event.target;
		setValue((prevState) => ({
				...prevState,
				[id]: value,
			})
		);
	};

	const isValid = Object.keys(error).length === 0;

	async function handleSubmit(event){
		event.preventDefault();
		try{
			if(isValid){
				await editTodo(props.id, value, todos, dispatch);
				handleEdit();
			}
		} catch(error){
			console.log(error);
		};
	};

	useEffect(() => {
		validateSchema
			.validate(value, { abortEarly: false })
			.then(() => {
				setError({})
			})
			.catch((yupError) => {
				const error = parceYupError(yupError);
				setError(error)
			})
	}, [value]);

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				error={error.title}
				value={value.title}
				id='title'
				onChange={handleChange}
			/>
		</form>
	)
};
