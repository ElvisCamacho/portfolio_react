import { combineReducers } from "redux";
//import { ActionTypes } from "../action";

const initialState = {
  count: 147,
};

export const countReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  return state;
};

// export const pokemonReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_POKEMON:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  count: countReducer,
  ////allPokemon: pokemonReducer,
 
});
