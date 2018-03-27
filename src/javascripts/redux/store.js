import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import initialState from './initial-state';
import cityReducer from './reducers/city';
import activeModalReducer from './reducers/modal';

const reducers = combineReducers({
  city: cityReducer,
  activeModalName: activeModalReducer
});

export default createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
