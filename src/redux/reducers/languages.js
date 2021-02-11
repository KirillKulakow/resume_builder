import { reduxTypesResumeLanguage, reduxTypesForResume } from "../../constants";

const initialState = [
];

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxTypesResumeLanguage.ADD_LANGUAGE:
      return [...state, action.payload];
    case reduxTypesResumeLanguage.DELETE_LANGUAGE:
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    case reduxTypesResumeLanguage.UPDATE_LANGUAGE:
      const newStateSet = state.slice();
      newStateSet.splice(action.payload.index, 1, action.payload.editLanguage);
      return newStateSet;
    case reduxTypesForResume.CLEAR_RESUME:
      return initialState;
    case reduxTypesForResume.UPDATE_RESUME:
      return action.payload.languages;
    default:
      return state;
  }
};
