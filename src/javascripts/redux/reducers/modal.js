import initialState from '../initial-state';
import CONSTANTS from '../constants/modal';


export default function activeModalReducer(state = initialState.activeModalName, action) {
  switch (action.type) {
    case CONSTANTS.ACTIONS.OPEN_MODAL:
      return action.data
    case CONSTANTS.ACTIONS.CLOSE_MODAL:
      return '';
    default:
      return state;
  }
}
