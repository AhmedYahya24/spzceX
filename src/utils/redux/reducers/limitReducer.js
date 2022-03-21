import { INCREMENTBYVALUE } from "../actions/limitType";

const initialState = {
  limit: 10,
};

const limitReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTBYVALUE:
      return { limit: action.value };

    default:
      return state;
  }
};

export default limitReducer;
