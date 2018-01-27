import { createStore, applyMiddleware } from "redux";

const initialState = {
  n: 0
};

function inc(state, action) {
  return { ...state, n: state.n + action.counter.n };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return inc(state, action);
    default:
      return state;
  }
}

const reporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.log(err);

    // reportingService.captureError(err);
    // store.dispatch({ type: 'APPLICATION_ERROR' })
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

export default createStore(reducer, applyMiddleware(reporter, async, logger));
