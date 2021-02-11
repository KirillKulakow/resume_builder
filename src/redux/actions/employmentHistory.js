import { reduxTypesResumeEmployment, reduxTypesForResume } from "../../constants";

export const addPosition = (employment) => ({
  type: reduxTypesResumeEmployment.ADD_POSITION,
  payload: employment,
});

export const deletePosition = (index) => ({
  type: reduxTypesResumeEmployment.DELETE_POSITION,
  payload: index,
});

export const changePositionData = ({ target }, index) => ({
  type: reduxTypesResumeEmployment.CHANGE_DATA_POSITION,
  payload: {
    target,
    index,
  },
});

export const changePositionStartDate = (start, index) => ({
  type: reduxTypesResumeEmployment.CHANGE_POSITION_START_DATE,
  payload: {
    start,
    index,
  },
});

export const changePositionEndDate = (end, index) => ({
  type: reduxTypesResumeEmployment.CHANGE_POSITION_END_DATE,
  payload: {
    end,
    index,
  },
});

export const clearResume = () => ({
  type: reduxTypesForResume.CLEAR_RESUME,
});

export const updateResume = (data) => ({
  type: reduxTypesForResume.UPDATE_RESUME,
  payload: data,
});
