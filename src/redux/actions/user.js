import { reduxUserTypes } from "../../constants";

export const logOutUser = () => ({
  type: reduxUserTypes.LOG_OUT,
});

export const logInUser = ({ email, uid }) => ({
  type: reduxUserTypes.LOG_IN,
  payload: { email, uid },
});

export const registerUser = ({ email, uid }) => ({
  type: reduxUserTypes.REGISTER,
  payload: { email, uid },
});

export const userError = (error) => ({
  type: reduxUserTypes.USER_ERROR,
  payload: error,
});

export const clearUserError = () => ({
  type: reduxUserTypes.CLEAR_ERROR
})
