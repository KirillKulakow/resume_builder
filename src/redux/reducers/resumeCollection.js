import { reduxTypesResumeCollection } from "../../constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxTypesResumeCollection.GET_COLLECTION_FROM_DATABASE:
      return action.payload;
    case reduxTypesResumeCollection.SAVE_COLLECTION_TO_DATABASE:
      return [...state, action.payload];
    case reduxTypesResumeCollection.DELETE_COLLECTION_FROM_DATABASE:
      return state.filter((collection) => collection.id !== action.payload);
    case reduxTypesResumeCollection.UPDATE_COLLECTION_IN_DATABASE:
      return state.map((col) =>
        col.id === action.payload.id ? { ...col, ...action.payload.data } : col
      );
    case reduxTypesResumeCollection.UPDATE_ALL_COLLECTION_IN_DATABASE:
      return {...action.payload.data};
    default:
      return state;
  }
};
