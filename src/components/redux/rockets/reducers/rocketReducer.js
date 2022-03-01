import { ADD_ROCKETS } from "../constants/constant";

const initialState = [];

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};
