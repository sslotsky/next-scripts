import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions } from "./ducks/jokes";
import Filters from "./Filters";

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const JokeList = styled.div`
  padding: 2rem;
  background-color: lightgray;
  width: 50%;
  height: 100vh;
`;

const Joke = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  background-color: white;
  border: 1px solid darkgray;
  text-align: left;

  &:hover {
    background-color: forestgreen;
    color: white;
  }
`;

export class Jokes extends Component {
  componentDidMount() {
    const { limit, page, search } = this.props;

    search("", page, limit);
  }

  componentWillReceiveProps(nextProps) {
    const { limit, page, search } = nextProps;

    if (page !== this.props.page) {
      search("", page, limit);
    }
  }

  render() {
    const { results } = this.props;

    return (
      <Content>
        <JokeList>
          {results.map(j => (
            <Joke key={j.id}>
              {j.joke}
            </Joke>
          ))}
        </JokeList>
        <Filters />
      </Content>
    );
  }
}

export default connect(state => state.jokes, actions)(Jokes);
