import React from "react"
import {Carousel, Typography} from 'antd';
import styled from "styled-components";
import brainLogo from "./images/brainLogo.svg";
import video1 from "./video/video1.mp4"
import video2 from "./video/video2.mp4"
import video3 from "./video/video3.mp4"
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
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
        {/*<StyledImage src={pic9} alt=""/>
        <StyledImage src={pic1} alt=""/>
      <StyledImage src={pic10} alt=""/>
      <StyledImage src={pic2} alt=""/>*/}
      </StyledCarousel>
    </div>
  }
}

export default TopSlider