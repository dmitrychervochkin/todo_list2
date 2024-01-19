export const booleanInitialState = {
	isLoading: false,
	refreshTodos: false,
	sort: false,
	isCompleting: false,
};

export function booleanReducer(state = booleanInitialState, action){
	switch(action.type){
		case 'CHANGE_IS_COMPLETING':
			return {
				...state,
				isCompleting: action.payload,
			}
		case 'CHANGE_REFRESH_TODOS':
			return {
				...state,
				refreshTodos: action.payload,
			}
		case 'CHANGE_SORT':
			return {
				...state,
				sort: action.payload,
			}
		case 'CHANGE_IS_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}
		default:
			return state;
	}
}
