export const utilsInitialState = {
	note: '',
	searchQuery: '',
};

export function utilsReducer(state = utilsInitialState, action) {
	switch (action.type) {
		case 'CHANGE_NOTE': {
			return {
				...state,
				note: action.payload,
			};
		}
		case 'CHANGE_SEARCH_QUERY':
			return {
				...state,
				searchQuery: action.payload,
			};
		default:
			return state;
	}
}
