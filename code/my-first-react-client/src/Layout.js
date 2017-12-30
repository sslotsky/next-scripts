import React from "react";
import { App, AppHeader, Title, AppLogo } from "./styles";
import logo from "./logo.svg";

export default function Layout({ title, renderContent }) {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Title>{title}</Title>
      </AppHeader>
      {renderContent()}
    </App>
  );
}
