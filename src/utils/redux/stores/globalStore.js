import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";

const globalStore = createStore(allReducers);

export default globalStore;
