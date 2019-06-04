import React from "react";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd.css";
import "./index.css";
import DownloadComponent from "./DownloadComponent";
import AddMuseum from "./AddMuseum";

const StyledApp = styled.div`
  min-width: 480px;
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
        <Route path="/download" component={DownloadComponent} />
        <Route path="/add-museum" component={AddMuseum} />
      </StyledApp>
    </Router>
  );
}

export default App;
