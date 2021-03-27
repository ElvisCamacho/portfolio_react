import { combineReducers } from "redux";

const initialState = {
  count: 147,
};

export const countReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  return state;
};

export default combineReducers({
  count: countReducer,
});
