import { createStore } from "redux";
import Videos from "./reducer";

let store = createStore(Videos);

export default store;
