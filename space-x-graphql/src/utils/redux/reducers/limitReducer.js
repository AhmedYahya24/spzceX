import {
  INCREMENTBYTEN,
  INCREMENTBYFIVE,
  INCREMENTBYFIFTEEN,
} from "../actions/limitType";

const initialState = {
  limit: 10,
};

const limitReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTBYFIVE:
      return { limit: 5 };
    case INCREMENTBYTEN:
      return { limit: 10 };
    case INCREMENTBYFIFTEEN:
      return { limit: 15 };

    default:
      return state;
  }
};

export default limitReducer;
