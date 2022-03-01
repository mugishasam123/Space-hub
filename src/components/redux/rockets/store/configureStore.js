import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rocketReducer } from "../reducers/rocketReducer";

const rootReducer = combineReducers({rockets:rocketReducer,})

export const Store = createStore(rootReducer,applyMiddleware(thunk,logger));