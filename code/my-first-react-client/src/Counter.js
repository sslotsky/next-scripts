import React from "react";
import type { Context } from "react";

type CounterState = { n: number };

const initialState = { n: 0 };

const CounterContext: Context<CounterState> = React.createContext(initialState);

function Count() {
  return (
    <CounterContext.Consumer>
      {theme => <h1>{theme.n}</h1>}
    </CounterContext.Consumer>
  );
}

export default class Counter extends React.Component {
  state = initialState;

  increment = n => () => this.setState(state => ({ n: state.n + n }));

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <div>
          <button onClick={this.increment(1)}>+</button>
          <Count />
          <button onClick={this.increment(-1)}>-</button>
        </div>
      </CounterContext.Provider>
    );
  }
}
