// const state = { n: 0 }
export const increment = state => ({ ...state, n: state.n + 1 });
export const decrement = state => ({ ...state, n: state.n - 1 });

export function createStore(initialState) {
  let currentState = initialState;

  const getState = () => currentState;
  const dispatch = action => {
    currentState = action(currentState);
  };

  return { getState, dispatch };
}
