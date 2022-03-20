import { NEXTOFFSET, PREVIOUSOFFSET } from "../actions/offsetType";

const initialState = {
  offset: 1,
};

const offsetReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXTOFFSET:
      return { offset: state.offset + action.value };
    case PREVIOUSOFFSET:
      return { offset: state.offset - action.value };
    default:
      return state;
  }
};

export default offsetReducer;
