import initialState from '../initial-state';
import CONSTANTS from '../constants/city';


export default function cityReducer(state = initialState.city, action) {
  switch (action.type) {
    case CONSTANTS.ACTIONS.CHANGE_CITY:
      return action.data
    default:
      return state;
  }
}
