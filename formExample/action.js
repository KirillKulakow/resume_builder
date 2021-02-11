export const BASIC_INFO = "@basicInfo/change";

export const changeBasicInputs = ({ target }) => ({
  type: BASIC_INFO,
  name: target.name,
  value: target.value,
});
