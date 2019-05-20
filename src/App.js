import React from 'react';
import Footer from "./Footer";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";
import styled from "styled-components";
import 'antd/dist/antd.css';

const StyledApp = styled.div`
  min-width: 480px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-smoothing: antialiased;
  font-smoothing: grayscale;
`;

class App extends React.Component {
  handleScroll = (e) => {
   console.log( e.target.scroll)
  };
  render() {
    return (
      <StyledApp >
        <TopMenu/>
        <MainContent/>
        <Footer/>
      </StyledApp>
    )
  }
}

export default App;
