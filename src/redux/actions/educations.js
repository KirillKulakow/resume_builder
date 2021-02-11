import { reduxTypesForResume, reduxTypesResumeEducation } from "../../constants";

export const addEducation = (data) => ({
  type: reduxTypesResumeEducation.ADD_EDUCATION,
  payload: data,
});

export const setEducation = (index, education) => ({
  type: reduxTypesResumeEducation.SET_EDUCATION,
  payload: { index, education },
});

export const deleteEducation = (index) => ({
  type: reduxTypesResumeEducation.DELETE_EDUCATION,
  payload: index,
});

export const clearResume = () => ({
  type: reduxTypesForResume.CLEAR_RESUME,
});

export const updateResume = (data) => ({
  type: reduxTypesForResume.UPDATE_RESUME,
  payload: data,
});
