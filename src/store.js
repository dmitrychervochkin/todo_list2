import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { booleanReducer, utilsReducer, todosReducer } from './reducers';

const reducer = combineReducers({
	todosState: todosReducer,
	booleanState: booleanReducer,
	utilsState: utilsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
