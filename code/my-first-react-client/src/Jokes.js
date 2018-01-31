import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  height: 100%;
`;

const JokeLink = ({ id, ...props }) => <Link to={`/jokes/${id}`} {...props} />;

const Joke = styled(JokeLink)`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  background-color: white;
  border: 1px solid darkgray;
  text-align: left;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: forestgreen;
    color: white;
  }
`;

export class Jokes extends Component {
  componentDidMount() {
    const { limit, page, search, filters: { term } } = this.props;

    search(term, page, limit);
  }

  componentWillReceiveProps(nextProps) {
    const { limit, page, search, filters: { term } } = nextProps;

    if (page !== this.props.page || term !== this.props.filters.term) {
      search(term, page, limit);
    }
  }

  render() {
    const { results } = this.props;

    return (
      <Content>
        <JokeList>
          {results.map(j => (
            <Joke key={j.id} id={j.id}>
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
