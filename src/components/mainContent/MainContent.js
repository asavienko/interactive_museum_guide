import React from "react";
import Description from "./description/Description";
import Advantages from "./adavantages/Advantages";
import AboutUs from "./aboutUs/AboutUs";
import Reviews from "./reviews/Reviews";
import Faq from "../faq/Faq";
import Partners from "../partners/Partners";
import TopSliderContainer from "./topSlider/TopSliderContainer";
import styled from "styled-components";
import Footer from "../footer/Footer";

const StyledWrapper = styled.div`
  max-height: calc(100vh - 46px);
  overflow-y: auto;
`;

class MainContent extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <TopSliderContainer />
        <Description />
        <Advantages />
        <AboutUs />
        <Reviews />
        <Footer />
      </StyledWrapper>
    );
  }
}

export default MainContent;
