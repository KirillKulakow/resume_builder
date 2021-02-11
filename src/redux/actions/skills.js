import { reduxTypesResumeSkills, reduxTypesForResume } from "../../constants";

export const addSkill = () => ({
  type: reduxTypesResumeSkills.ADD_SKILL,
  payload: { skill: "" },
});

export const deleteSkill = (index) => ({
  type: reduxTypesResumeSkills.DELETE_SKILL,
  payload: index,
});

export const updateSkill = (index, editSkill) => ({
  type: reduxTypesResumeSkills.UPDATE_SKILL,
  payload: { index, editSkill },
});

export const clearResume = () => ({
  type: reduxTypesForResume.CLEAR_RESUME,
});

export const updateResume = (data) => ({
  type: reduxTypesForResume.UPDATE_RESUME,
  payload: data,
});
