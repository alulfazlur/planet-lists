import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import planetsReducer from "./planets/planets.reducers";

const rootReducer = combineReducers({
  planetsState: planetsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;
