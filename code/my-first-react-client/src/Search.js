import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { actions } from "./ducks/jokes";

const Form = styled.form`
  padding: 1rem;
`;

const control = css`
  border-radius: .25rem;
  padding: .25rem;
  border-color: darkgray;
  width: 60%;
`;

const Input = styled.input`
  ${control}
`;

const Submit = styled.button.attrs({
  type: "submit"
})`
  ${control}
  background-color: forestgreen;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
`;

export class Search extends Component {
  state = {
    query: this.props.filters.term
  };

  onChange = e => this.setState({ query: e.target.value });

  submit = e => {
    e.preventDefault();
    this.props.setFilter("term", this.state.query);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Input value={this.state.query} onChange={this.onChange} />
        <div>
          <Submit>Search</Submit>
        </div>
      </Form>
    );
  }
}

export default connect(state => state.jokes, actions)(Search);
