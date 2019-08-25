import React from "react";
import TopMenu from "./TopMenu";
import MainContent from "./mainContent/MainContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd.css";
import Faq from "./faq/Faq";
import Partners from "./partners/Partners";

const StyledApp = styled.div`
  min-width: 480px;
  height: 100%;
  font-famłily: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-smoothing: antialiased;
  font-smoothing: grayscale;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <TopMenu />
        <Route path="/" exact component={MainContent} />
        <Route path="/faq" component={Faq} />
        <Route path="/partners" component={Partners} />
      </StyledApp>
    </Router>
  );
}

export default App;
