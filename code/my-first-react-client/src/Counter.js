import React from "react";
import connect from "./connect";
import { inc as increment } from "./actions";

export function Counter({ n, step, send }) {
  return (
    <div>
      <button onClick={send(increment(step))}>+</button>
      <h2>{n}</h2>
      <button onClick={send(increment(-step))}>-</button>
    </div>
  );
}

export default connect(state => state)(Counter);
