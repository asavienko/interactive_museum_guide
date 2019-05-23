import React from 'react';
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";
import styled from "styled-components";
import 'antd/dist/antd.css';
import "./index.css"

const StyledApp = styled.div`
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-smoothing: antialiased;
  font-smoothing: grayscale;
`;

function App(){
    return (
      <StyledApp>
          <TopMenu/>
          <MainContent/>
      </StyledApp>
    )
}

export default App;
