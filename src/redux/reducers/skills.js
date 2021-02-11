import { reduxTypesResumeSkills, reduxTypesForResume } from "../../constants";

const initialState = [
  
];

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxTypesResumeSkills.ADD_SKILL:
      return [...state, action.payload];

    case reduxTypesResumeSkills.DELETE_SKILL:
      const newStateWithDelete = [...state];
      newStateWithDelete.splice(action.payload, 1);
      return newStateWithDelete;

    case reduxTypesResumeSkills.UPDATE_SKILL:
      const newStateWithEdit = [...state];
      newStateWithEdit.splice(
        action.payload.index,
        1,
        action.payload.editSkill
      );
      return newStateWithEdit;
    case reduxTypesForResume.CLEAR_RESUME:
      return initialState;
    case reduxTypesForResume.UPDATE_RESUME:
      return action.payload.skills;
    default:
      return state;
  }
};
