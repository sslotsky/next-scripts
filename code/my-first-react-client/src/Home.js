import React from "react";
import { withLayout } from "./Layout";
import Jokes from "./Jokes";

export function Home({ updateMessage }) {
  return <Jokes />;
}

export default withLayout("Welcome to React!")(Home);
