import React from "react";
import { Carousel } from "antd/lib/index";
import styled from "styled-components";
import brainLogo from "../../../assets/images/brainLogo.svg";
import video1 from "../../../assets/video/video1.mp4";
import video2 from "../../../assets/video/video2.mp4";
import video3 from "../../../assets/video/video3.mp4";
import TopSliderComponent from "./TopSliderComponent";
import image123 from "../../../assets/images/preview/image123.png";
import image345 from "../../../assets/images/preview/image345.png";

const StyledCarousel = styled(Carousel)`
  & .slick-slide {
    overflow: hidden;
  }
`;

class TopSliderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionIn: false
    };
  }

  startAnimation = () => {
    setTimeout(() => this.setState({ firstTransitionIn: true }), 300);
  };

  setTransitionIn = () => {
    this.setState({ firstTransitionIn: true });
  };
  setTransitionOut = () => {
    this.setState({ firstTransitionIn: false });
  };

  render() {
    return (
      <div id="topslider">
        <StyledCarousel
          autoplay
          afterChange={this.setTransitionIn}
          beforeChange={this.setTransitionOut}
          pauseOnHover={false}
        >
          <TopSliderComponent
            inProp={this.state.firstTransitionIn}
            startAnimation={this.startAnimation}
            logo={brainLogo}
            title={"Интелектуальное распознование экспонатов"}
            description={
              "быстро и точно определяет экспонат и находит информацию о нем"
            }
            videoSrc={video1}
          />
          <TopSliderComponent
            inProp={this.state.firstTransitionIn}
            startAnimation={this.startAnimation}
            logo={image123}
            title={"Все интеллектуальное должно оставаться простым и доступным"}
            description={"легкость, информативность"}
            videoSrc={video2}
          />
          <TopSliderComponent
            inProp={this.state.firstTransitionIn}
            startAnimation={this.startAnimation}
            logo={image345}
            title={"Выдающиеся произведения искусства и рассказ историй"}
            description={
              "Это дает захватывающий взгляд на процесс самообразования и культурного развития"
            }
            videoSrc={video3}
          />
        </StyledCarousel>
      </div>
    );
  }
}

export default TopSliderContainer;
