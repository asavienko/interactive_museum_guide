import React from "react"
import {Carousel} from 'antd';
import styled from "styled-components";
import brainLogo from "./images/brainLogo.svg";
import video1 from "./video/video1.mp4"
import video2 from "./video/video2.mp4"
import video3 from "./video/video3.mp4"
import SlideComponent from "./SlideComponent";


const StyledCarousel = styled(Carousel)`

.slick-slide {
  overflow: hidden;
}
`;

class TopSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionIn: false,
    }
  }

  startAnimation = () => {
    setTimeout(() => this.setState({firstTransitionIn: true}), 300)
  };

  setTransitionIn = () => {
    this.setState({firstTransitionIn: true});
  };
  setTransitionOut = () => {
    this.setState({firstTransitionIn: false});
  };


  render() {
    return <div>
      <StyledCarousel
        autoplay
        afterChange={this.setTransitionIn}
        beforeChange={this.setTransitionOut}
      >
        <SlideComponent
          inProp={this.state.firstTransitionIn}
          startAnimation={this.startAnimation}
          logo={brainLogo}
          title={"Интелектуальное распознование экспонатов"}
          description={"быстро и точно определяет экспонат и находит информацию о нем"}
          videoSrc={video1}
        />
        <SlideComponent
          inProp={this.state.firstTransitionIn}
          startAnimation={this.startAnimation}
          logo={brainLogo}
          title={"Интелектуальное распознование экспонатов"}
          description={"быстро и точно определяет экспонат и находит информацию о нем"}
          videoSrc={video2}
        />
        <SlideComponent
          inProp={this.state.firstTransitionIn}
          startAnimation={this.startAnimation}
          logo={brainLogo}
          title={"Интелектуальное распознование экспонатов"}
          description={"быстро и точно определяет экспонат и находит информацию о нем"}
          videoSrc={video3}
        />
      </StyledCarousel>
    </div>
  }
}

export default TopSlider