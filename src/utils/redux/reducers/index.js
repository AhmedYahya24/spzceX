import { combineReducers } from "redux";
import limitReducer from "./limitReducer";
import modalIdReducer from "./modalIdReducer";
import offsetReducer from "./offsetReducer";
import showModalReducer from "./showModalReducer";

export default combineReducers({
  limit: limitReducer,
  offset: offsetReducer,
  modal: showModalReducer,
  id: modalIdReducer,
});
