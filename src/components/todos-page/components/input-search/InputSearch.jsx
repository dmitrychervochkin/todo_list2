import React from "react";
import styles from '../../../../App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectSearchQuery } from "../../../../selectors";
import { changeSearchQuery } from "../../../../actions/change-search-query";

export function InputSearch(){
	const searchQuery = useSelector(selectSearchQuery);
	const dispatch = useDispatch();

	function handleChange(event){
		dispatch(changeSearchQuery(event.target.value))
	};

	return(
		<input
			placeholder='Поиск...'
			value={searchQuery}
			onChange={handleChange}
			className={styles.search}
		></input>
	);
};
