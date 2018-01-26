import React, { Component } from "react";
import { Provider } from "react-redux";
import T from "prop-types";
import store from "./store";
import Home from "./Home";

class App extends Component {
  static childContextTypes = {
    message: T.string
  };

  state = {
    message: "Hot reloading is great!"
  };

  getChildContext() {
    return { message: this.state.message };
  }

  updateMessage = message => this.setState({ message });

  render() {
    return (
      <Provider store={store}>
        <Home updateMessage={this.updateMessage} />
      </Provider>
    );
  }
}

export default App;
