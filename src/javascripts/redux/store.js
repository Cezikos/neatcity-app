import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import initialState from './initial-state';
import cityReducer from './reducers/city';

const reducers = combineReducers({
  city: cityReducer
});

export default createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
