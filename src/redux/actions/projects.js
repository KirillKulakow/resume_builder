import { reduxTypesResumeProjects, reduxTypesForResume } from "../../constants";

export const addProject = (data) => ({
    type: reduxTypesResumeProjects.ADD_PROJECT,
    payload: data,
});

export const setProject = (index, project) => ({
    type: reduxTypesResumeProjects.SET_PROJECT,
    payload: { index, project },
});

export const deleteProject = (index) => ({
    type: reduxTypesResumeProjects.DELETE_PROJECT,
    payload: index,
});

export const clearResume = () => ({
    type: reduxTypesForResume.CLEAR_RESUME,
});

export const updateResume = (data) => ({
    type: reduxTypesForResume.UPDATE_RESUME,
    payload: data,
});
