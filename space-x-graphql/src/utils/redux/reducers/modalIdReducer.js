import { ID } from "../actions/IDType";

const initialState = {
  id: 0,
};

const modalIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ID:
      return { ...state, id: action.value };

    default:
      return state;
  }
};

export default modalIdReducer;
