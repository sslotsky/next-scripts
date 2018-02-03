# Video 5.5

## Opening Slides

![Slide 1: Section Title Slide](./slide-1-title.png)

Hello and welcome to _Learning the New React Context API_. In our last two videos we focused on managing form state with final-form and doing validation on the form data with validate-this. Today we'll learn how to use the brand new React Context API for state management.

![Slide 2: Summary Slide](./slide-2-summary.png)

We'll start by upgrading to the latest React alpha release so that we can use the context API. This requires a bit of static typing, for which we will integrate flow into our application. Then we'll declare our context and convert our counter application to use it instead of a data store.

## Content

_open terminal_

Back in the second section, I advised you all not to use React context because it's unstable and likely to change. But in fact, the new API is already available and its usage will now be officially encouraged, so today we're going to see what it looks like. First I'm going to upgrade to the latest alpha release which contains the new API.

```
$ yarn remove react react-dom && yarn add react@next react-dom@next
```

We're using the `next` keyword which basically means that we're asking for the upcoming version instead of the latest stable one. Note that this currently installs version `16.3.0-alpha.0` at the time of this recording, so if you're following along at home you may want to specify that version specifically, although anything later will probably be fine.

Next we'll install the `flow-bin` library to our dev dependencies so we can run our JavaScript files through flow to process all the static typing we need to do.

Then we'll run the `flow init` task to generate a flow configuration.

```
$ yarn add --dev flow-bin
$ yarn run flow init
```

_open Counter.js_

Now we can rewrite our Counter app and say goodbye to our data store. First we need to import the `Context` type from React. This is the first flow related concept we'll see. `Context` is a data type declared with flow and exposed by React, and we can only get at it with an `import type` statement when we're using flow.

Next we'll declare a data type for our counter data. This is just an object with a single number `n`.

Then we can declare an initial state with `n` set to zero.

Now we can create our counter context.

Here we see that the `Context` type we imported is a generic type, so we parameterize this with our `CounterState` type, and we instantiate it by calling `createContext` and supplying our initial state.

```JavaScript
import React from "react";
import type { Context } from "react";

type CounterState = { n: number };

const initialState = { n: 0 };

const CounterContext: Context<CounterState> = React.createContext(initialState);
```

Next let's turn our `Counter` screen back into a component class so it can manage its own state.

This will start off as the `initialState`.

We'll add our `increment` handler which will change our `n` variable by some given number.

And now I'll render my buttons inside a context provider that takes the current state as the value.

Then I'll update the buttons to call `this.increment` with one and negative one, respectively.

```JavaScript
export default class Counter extends React.Component {
  state = initialState;

  increment = n => () => this.setState(state => ({ n: state.n + n }));

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <div>
          <button onClick={this.increment(1)}>+</button>
          <button onClick={this.increment(-1)}>-</button>
        </div>
      </CounterContext.Provider>
    );
  }
}
```

Now here's where it gets interesting. Instead of displaying the `n` here, we're going to pull it out into a separate component that consumes our context.

This will render a context consumer.

These consumers accept render props as children, so we provide a function which accepts the `theme` and returns our heading tag, with the value for `n` coming from the `theme` itself. That means that we don't have to pass `n` into our `Count` component as a prop.

```JavaScript
function Count() {
  return (
    <CounterContext.Consumer>
      {theme => <h1>{theme.n}</h1>}
    </CounterContext.Consumer>
  );
}
```

So let's render this component between our buttons.

```JavaScript
          <button onClick={this.increment(1)}>+</button>
          <Count />
          <button onClick={this.increment(-1)}>-</button>
```

And now let's hook this up to our router and give it a go.

_open Home.js_

We'll import the component and put it behind `/counter`.

```JavaScript
import Counter from "./Counter";

...


        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/jokes/:id" component={Joke} />
```

_open browser, navigate to /counter_

And now our counter app is working using the new context API, without any help from an external data store.

![Slide 3: Next Video Slide](./slide-3-next-video.png)

_course conclusion tbd_
