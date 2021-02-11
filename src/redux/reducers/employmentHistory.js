import { reduxTypesForResume } from "../../constants";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypesForResume.ADD_POSITION:
      return [...state, payload];
    case reduxTypesForResume.DELETE_POSITION:
      const newState = [...state];
      newState.splice(payload, 1);

      return newState;
    case reduxTypesForResume.CHANGE_DATA_POSITION:
      return state.map((item, index) =>
        index === payload.index
          ? { ...item, [payload.target.name]: payload.target.value }
          : item
      );
    case reduxTypesForResume.CHANGE_POSITION_START_DATE:
      return state.map((item, index) =>
        index === payload.index ? { ...item, ...payload } : item
      );
    case reduxTypesForResume.CHANGE_POSITION_END_DATE:
      return state.map((item, index) =>
        index === payload.index ? { ...item, ...payload } : item
      );
    case reduxTypesForResume.CLEAR_RESUME:
      return initialState;
    case reduxTypesForResume.UPDATE_RESUME:
      return payload.employmentHistory;
    default:
      return state;
  }
};
