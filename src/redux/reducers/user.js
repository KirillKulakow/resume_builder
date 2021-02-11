import { reduxUserTypes } from "../../constants";

const initialState = {};

const userLogOut = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxUserTypes.LOG_OUT:
      return userLogOut;
    case reduxUserTypes.LOG_IN:
      return action.payload;
    case reduxUserTypes.REGISTER:
      return action.payload;
    case reduxUserTypes.USER_ERROR:
      return { ...state, error: action.payload };
    case reduxUserTypes.CLEAR_ERROR:
      return {...state, error: {}};
    default:
      return state;
  }
};
