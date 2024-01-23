import { combineReducers } from "redux";

const INITIAL_STATE = {
  todo: null,
};
const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
