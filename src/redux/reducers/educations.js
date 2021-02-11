import { reduxTypesResumeEducation, reduxTypesForResume } from "../../constants";

const initialState = [
];

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxTypesResumeEducation.ADD_EDUCATION:
      return [...state, action.payload];
    case reduxTypesResumeEducation.SET_EDUCATION:
      const newStateSet = state.slice();
      newStateSet.splice(action.payload.index, 1, action.payload.education);
      return newStateSet;
    case reduxTypesResumeEducation.DELETE_EDUCATION:
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    case reduxTypesForResume.CLEAR_RESUME:
      return initialState;
    case reduxTypesForResume.UPDATE_RESUME:
      return action.payload.educations;
    default:
      return state;
  }
};
