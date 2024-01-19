export const initialState = {
	todos: [],
	boolean: {
		isLoading: false,
		refreshTodos: false,
		sort: false,
		isCompleting: false,
	},
	utils: {
		note: '',
		searchQuery: '',
	}
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_NOTE': {
			return {
				...state,
				utils: {
					...state.utils,
					note: action.payload,
				}
			}
		}
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
		case 'CHANGE_IS_COMPLETING':
			return {
				...state,
				boolean: {
					...state.boolean,
					isCompleting: action.payload,
				}
			}
		case 'CHANGE_REFRESH_TODOS':
			return {
				...state,
				boolean: {
					...state.boolean,
					refreshTodos: action.payload,
				}
			}
		case 'CHANGE_SORT':
			return {
				...state,
				boolean: {
					...state.boolean,
					sort: action.payload,
				}
			}
		case 'CHANGE_SEARCH_QUERY':
			return {
				...state,
				utils: {
					...state,
					searchQuery: action.payload
				}
			}
		default:
			return state;
	}
};
