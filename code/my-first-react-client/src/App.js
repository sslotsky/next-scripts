import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";

class App extends Component {
  state = {
    message: "Hot reloading is great!"
  };

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
