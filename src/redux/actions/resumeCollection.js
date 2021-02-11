import { reduxTypesResumeCollection } from "../../constants";

export const saveResume = (collection) => ({
  type: reduxTypesResumeCollection.SAVE_COLLECTION_TO_DATABASE,
  payload: collection,
});

export const getResume = (collection) => ({
  type: reduxTypesResumeCollection.GET_COLLECTION_FROM_DATABASE,
  payload: collection,
});

export const deleteResume = (id) => ({
  type: reduxTypesResumeCollection.DELETE_COLLECTION_FROM_DATABASE,
  payload: id,
});

export const editResume = (id, data) => ({
  type: reduxTypesResumeCollection.UPDATE_COLLECTION_IN_DATABASE,
  payload: {
    id,
    data,
  },
});

export const updateResumeCollection = (data) => ({
  type: reduxTypesResumeCollection.UPDATE_ALL_COLLECTION_IN_DATABASE,
  payload: {
    data
  },
});
