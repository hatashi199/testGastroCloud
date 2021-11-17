import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { allLaunchesReducer, launchData } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    allLaunchesData: allLaunchesReducer,
    dataLaunch: launchData,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
