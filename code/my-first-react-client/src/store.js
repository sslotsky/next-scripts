import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as counter } from "./ducks/counter";
import { reducer as jokes } from "./ducks/jokes";

const reporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.log(err);
  }
};

const logger = store => next => action => {
  console.log("dispatching", action);
  console.log("current state", store.getState());
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const async = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch).catch(err => {
      console.log(err);
    });
  }

  return next(action);
};

const reducer = combineReducers({ counter, jokes });

export default createStore(reducer, applyMiddleware(reporter, async, logger));
