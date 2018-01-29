import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions } from "./ducks/jokes";

const Container = styled.div`
  width: 50%;
  padding: 2rem;
`;

const Content = styled.div`
  border: 1px solid lightgray;
  border-radius: 1rem;
  padding: 2rem;
`;

const Flipper = styled.button`
  background-color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  margin: 1rem;
`;

export function Filters({ page, totalPages, next, previous }) {
  return (
    <Container>
      <Content>
        <Flipper disabled={page === 1} onClick={previous}>&lt;</Flipper>
        <PageInfo>Page {page} of {totalPages}</PageInfo>
        <Flipper disabled={page === totalPages} onClick={next}>&gt;</Flipper>
      </Content>
    </Container>
  );
}

export default connect(state => state.jokes, actions)(Filters);
