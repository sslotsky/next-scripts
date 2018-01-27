const incrementApi = n => Promise.resolve();

export function increment(step) {
  return dispatch =>
    incrementApi(step)
      .then(() => {
        throw { message: "whoops" };
        dispatch({
          type: "INCREMENT",
          n: step
        });
      })
      .catch(err => {
        if (err.status === 422) {
          dispatch({ type: "VALIDATION_ERROR" });
        } else {
          throw err;
        }
      });
}
