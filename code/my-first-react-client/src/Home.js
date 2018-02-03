import React from "react";
import { Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { withLayout } from "./Layout";
import Jokes from "./Jokes";
import Joke from "./Joke";
import SignUp from "./SignUp";
import Counter from "./Counter";

const history = createHistory();

history.listen((location, action) => {
  console.log(location, action);
});

export function Home({ updateMessage }) {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path="/" component={Jokes} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/jokes/:id" component={Joke} />
      </React.Fragment>
    </Router>
  );
}

export default withLayout("Welcome to React!")(Home);
