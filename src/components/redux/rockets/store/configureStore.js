import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rocketReducer } from "../reducers/rocketReducer";
import { missionReducer } from '../../../../redux/missions/missionActions'
const rootReducer = combineReducers({
  rockets:rocketReducer,
  missions:missionReducer,
})

export const Store = createStore(rootReducer,applyMiddleware(thunk,logger));