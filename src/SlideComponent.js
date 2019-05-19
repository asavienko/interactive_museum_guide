import pic8 from "./images/pic8.jpg";
import {Typography} from "antd";
import React from "react";
import styled from "styled-components";
import {Transition} from "react-transition-group";

const {Title, Text} = Typography;

const StyledBackground = styled.video` 
  width:100%;
  height: 100vh;
  object-fit: cover;
`;
const StyledImageOverlay = styled.div`
  width:100%;
  height: 100%;
  background: rgba(0,0,0, 0.5);
  position: absolute;
`;
const StyledSlide = styled.div`
overflow: hidden;
position: relative;
`;
const StyledLogoImage = styled.img`
    width: 9rem;
    height: 9rem;
    opacity: 0.94;
    object-fit: cover;
`;
const StyledTitle = styled(Title)`
color: white!important;
width: max-content;
max-width: 70vw;
text-shadow: 0 0.3vw 0.9vw black;
`;
const StyledText = styled(Text)`
font-size: 1.1rem;
color: white!important;
text-shadow: 0 0.3vw 0.9vw black;
`;
const StyledAnimateDiv = styled.div`
position: absolute;
display: flex;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 100vw;
z-index: 10;
`;
const StyledWrapper = styled.div`
position: relative;
`;

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
};
const imageTransitionStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
};

const transitionStylesLogo = {
  entering: {transform: 'translate(0)'},
  entered: {transform: 'translate(0)'},
  exiting: {transform: 'translate(-100vw)'},
  exited: {transform: 'translate(-100vw)'},
};

const transitionStylesTitle = {
  entering: {transform: 'translate(0vw)'},
  entered: {transform: 'translate(0vw)'},
  exiting: {transform: 'translate(100vw)'},
  exited: {transform: 'translate(100vw)'},
};

const transitionStylesText = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
};


class SlideComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondTransitionIn: false,
    }
  }


  secondTransitionStart = () => {
    this.setState({secondTransitionIn: true})
  };
  secondTransitionStop = () => {
    this.setState({secondTransitionIn: false})
  };


  render() {
    const {inProp, logo, title, description, videoSrc} = this.props;
    return <StyledSlide>
      <StyledAnimateDiv>
        <Transition
          in={inProp}
          timeout={duration}
          onEntered={this.secondTransitionStart}
          onExiting={this.secondTransitionStop}>
          {state => (<StyledWrapper>
              < StyledLogoImage
                src={logo}
                style={{
                  ...defaultStyle,
                  ...transitionStylesLogo[state]
                }}/>
            </StyledWrapper>
          )}
        </Transition>
        <Transition in={this.state.secondTransitionIn} timeout={duration}>
          {state => (<div>
            <StyledTitle
              level={3}
              style={{
                ...defaultStyle,
                ...transitionStylesTitle[state]
              }}>
              {title}
            </StyledTitle>
            <StyledText
              string
              style={{
                ...imageTransitionStyle,
                ...transitionStylesText[state]
              }}>
              {description}
            </StyledText>
          </div>)}
        </Transition>
      </StyledAnimateDiv>
      <StyledImageOverlay/>
      <StyledBackground
        onPlaying={this.props.startAnimation}
        muted
        loop
        autoPlay
        src={videoSrc}
      />
    </StyledSlide>
  }
}

export default SlideComponent;