import CONSTANTS from '../constants/modal';


export default {
  actions: {
    closeModal: function(name) {
      return {
        type: CONSTANTS.ACTIONS.CLOSE_MODAL,
        data: name
      }
    },
    openModal: function(name) {
      return {
        type: CONSTANTS.ACTIONS.OPEN_MODAL,
        data: name
      }
    }
  }
};
