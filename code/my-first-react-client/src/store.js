export function createStore(initialState) {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;

  const subscribe = callback => {
    listeners.push(callback);
  };

  const unsubscribe = callback => {
    if (listeners.includes(callback)) {
      listeners.splice(listeners.indexOf(callback), 1);
    }
  };

  const dispatch = action => {
    currentState = action(currentState);
    listeners.forEach(l => l(currentState));
  };

  return { getState, dispatch, subscribe, unsubscribe };
}
