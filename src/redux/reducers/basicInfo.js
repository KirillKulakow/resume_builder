import { BASIC_INFO, CHANGE_TYPE, reduxTypesForResume } from "../../constants";

const initialState = {
  type: 1,
  id: "",
  title: "",
  jobTitle: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  summary: "",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case BASIC_INFO:
      return { ...state, [action.name]: action.value };
    case CHANGE_TYPE:
      return { ...state, ...action.payload };
    case reduxTypesForResume.CLEAR_RESUME:
      return initialState;
    case reduxTypesForResume.UPDATE_RESUME:
      return action.payload.basicInfo;
    default:
      return state;
  }
};
