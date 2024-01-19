export const todosInitialState = [];

export function todosReducer(state = todosInitialState, action){
	switch(action.type){
		case 'CHANGE_TODOS':
			return {
				...state,
				todos: action.payload,
			}
		case 'ADD_TODO':
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
};
