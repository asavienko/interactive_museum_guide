import React from 'react';
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import styled from "styled-components";
import 'antd/dist/antd.css';
import "./index.css"

const StyledApp = styled.div`
  min-width: 480px;
  font-famŁily: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-smoothing: antialiased;
  font-smoothing: grayscale;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <TopMenu/>
        <MainContent/>
      </StyledApp>
    </Router>
  )
}

export default App;
