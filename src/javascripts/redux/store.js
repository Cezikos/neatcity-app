import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import initialState from './initial-state';
import activeModalReducer from './reducers/modal';

const reducers = combineReducers({
  activeModalName: activeModalReducer
});

export default createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
