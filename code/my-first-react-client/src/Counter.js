import React from "react";
import connect from "./connect";
import { increment, decrement } from "./store";

export function Counter({ n, dispatch }) {
  const inc = () => dispatch(increment);
  const dec = () => dispatch(decrement);

  return (
    <div>
      <button onClick={inc}>+</button>
      <h2>{n}</h2>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default connect(state => state)(Counter);
