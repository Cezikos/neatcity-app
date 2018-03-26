import CONSTANTS from '../constants/city';


export default {
  actions: {
    changeCity: function(name) {
      return {
        type: CONSTANTS.ACTIONS.CHANGE_CITY,
        data: name
      }
    }
  }
};
