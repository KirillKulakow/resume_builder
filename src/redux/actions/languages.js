import { reduxTypesResumeLanguage, reduxTypesForResume } from "../../constants";

export const addLanguage = () => ({
  type: reduxTypesResumeLanguage.ADD_LANGUAGE,
  payload: { language: "", level: "" },
});

export const deleteLanguage = (index) => ({
  type: reduxTypesResumeLanguage.DELETE_LANGUAGE,
  payload: index,
});

export const updateLanguage = (index, editLanguage) => ({
  type: reduxTypesResumeLanguage.UPDATE_LANGUAGE,
  payload: { index, editLanguage },
});

export const clearResume = () => ({
  type: reduxTypesForResume.CLEAR_RESUME,
});

export const updateResume = (data) => ({
  type: reduxTypesForResume.UPDATE_RESUME,
  payload: data,
});
