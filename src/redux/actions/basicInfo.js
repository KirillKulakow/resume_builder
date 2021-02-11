import { BASIC_INFO, CHANGE_TYPE, reduxTypesForResume } from "../../constants";

export const changeBasicInputs = ({ target }) => ({
  type: BASIC_INFO,
  name: target.name,
  value: target.value,
});

export const changeType = (number) => ({
  type: CHANGE_TYPE,
  payload: { type: number },
});

export const clearResume = () => ({
  type: reduxTypesForResume.CLEAR_RESUME,
});

export const updateResume = (data) => ({
  type: reduxTypesForResume.UPDATE_RESUME,
  payload: data,
});
