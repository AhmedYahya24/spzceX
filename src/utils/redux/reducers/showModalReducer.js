import { HIDE, SHOW } from "../actions/modalType";

const initialState = {
  view: false,
};

const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return { view: true };
    case HIDE:
      return { view: false };
    default:
      return state;
  }
};

export default showModalReducer;
