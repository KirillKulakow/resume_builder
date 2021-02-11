import { reduxTypesResumeProjects, reduxTypesForResume } from "../../constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxTypesResumeProjects.ADD_PROJECT:
      return [...state, action.payload];
    case reduxTypesResumeProjects.DELETE_PROJECT:
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    case reduxTypesResumeProjects.SET_PROJECT:
      const newStateSet = state.slice();
      newStateSet.splice(action.payload.index, 1, action.payload.project);
      return newStateSet;
    case reduxTypesForResume.CLEAR_RESUME:
      return initialState;
    case reduxTypesForResume.UPDATE_RESUME:
      return action.payload.projects;
    default:
      return state;
  }
};
