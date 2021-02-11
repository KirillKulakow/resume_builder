const initialState = "light";
export default (state = initialState, action) => {
  switch (action.type) {
    case "DARK_THEME":
      localStorage.setItem("Theme", JSON.stringify("dark"));

      return "dark";
    case "LIGHT_THEME":
      localStorage.setItem("Theme", JSON.stringify("light"));

      return "light";

    default:
      return state;
  }
};
