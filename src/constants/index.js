// Paths for Router
export const paths = {
  registration: "/registration",
  login: "/login",
  dashboard: "/dashboard",
  editor: "/editor",
  templates: "/templates",
};

//Action types for resume
export const reduxTypesForResume = {
  ADD_POSITION: "ADD_POSITION",
  DELETE_POSITION: "DELETE_POSITION",
  CHANGE_DATA_POSITION: "CHANGE_DATA_POSITION",
  CHANGE_POSITION_START_DATE: "CHANGE_POSITION_START_DATE",
  CHANGE_POSITION_END_DATE: "CHANGE_POSITION_END_DATE",
  CLEAR_RESUME: "CLEAR_RESUME",
  UPDATE_RESUME: "UPDATE_RESUME",
}

//Action types for resume collection
export const reduxTypesResumeCollection = {
  SAVE_COLLECTION_TO_DATABASE: "SAVE_COLLECTION_TO_DATABASE",
  GET_COLLECTION_FROM_DATABASE: "GET_COLLECTION_FROM_DATABASE",
  DELETE_COLLECTION_FROM_DATABASE: "DELETE_COLLECTION_FROM_DATABASE",
  UPDATE_COLLECTION_IN_DATABASE: "UPDATE_COLLECTION_IN_DATABASE",
  UPDATE_ALL_COLLECTION_IN_DATABASE: "UPDATE_ALL_COLLECTION_IN_DATABASE",
}

//Action types for resume education
export const reduxTypesResumeEducation = {
  ADD_EDUCATION: "ADD_EDUCATION",
  DELETE_EDUCATION: "DELETE_EDUCATION",
  SET_EDUCATION: "SET_EDUCATION"
}

//Action types for resume projects
export const reduxTypesResumeProjects = {
  ADD_PROJECT: "ADD_PROJECT",
  SET_PROJECT: "SET_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
}

//Action types for resume employment
export const reduxTypesResumeEmployment = {
  ADD_POSITION: 'ADD_POSITION',
  DELETE_POSITION: 'DELETE_POSITION',
  CHANGE_DATA_POSITION: 'CHANGE_DATA_POSITION',
  CHANGE_POSITION_START_DATE: 'CHANGE_POSITION_START_DATE',
  CHANGE_POSITION_END_DATE: 'CHANGE_POSITION_END_DATE'
}

//Action types for resume languages
export const reduxTypesResumeLanguage = {
  ADD_LANGUAGE: 'ADD_LANGUAGE',
  DELETE_LANGUAGE: 'DELETE_LANGUAGE',
  UPDATE_LANGUAGE: 'UPDATE_LANGUAGE'
}

//Action types for resume skills
export const reduxTypesResumeSkills = {
  ADD_SKILL: 'ADD_SKILL',
  DELETE_SKILL: 'DELETE_SKILL',
  UPDATE_SKILL: 'UPDATE_SKILL'
}

//Action types for user
export const reduxUserTypes = {
  LOG_OUT: "LOG_OUT",
  LOG_IN: "LOG_IN",
  REGISTER: "REGISTER",
  USER_ERROR: "USER_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR"
};
//Action types for basicInfo in resume
export const CHANGE_TYPE = "CHANGE_TYPE";
export const BASIC_INFO = "@basicInfo/change";
