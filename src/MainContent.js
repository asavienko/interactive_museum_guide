import React from "react"
import Home from "./Home";
import Description from "./Description";
import Download from "./Download";
import Reviews from "./Reviews";
import Faq from "./Faq";
import Partners from "./Partners";
import TopSlider from "./TopSlider";
import styled from "styled-components";
import Footer from "./Footer";

const StyledWrapper = styled.div`
  max-height: calc(100vh - 46px);
  overflow-y: auto;
  min-width: 480px;
`;

class MainContent extends React.Component {

  render() {
    return <StyledWrapper>
      <TopSlider/>
      <Home/>
      <Description/>
      <Download/>
      <Partners/>
      <Reviews/>
      <Faq/>
      <Footer/>
    </StyledWrapper>
  }
}

export default MainContent