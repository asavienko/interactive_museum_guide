import { Typography } from "antd/lib/index";
import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

const { Title, Text } = Typography;

const blockHeight = "calc(100vh - 46px)";

const StyledBackground = styled.video`
  width: 100%;
  height: ${blockHeight};
  object-fit: cover;
`;
const StyledImageOverlay = styled.div`
  width: 100%;
  height: ${blockHeight};
  background: rgba(0, 21, 41, 0.5);
  position: absolute;
`;
const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;
  height: ${blockHeight};
`;
const StyledLogoImage = styled.img`
  width: 9rem;
  height: 9rem;
  margin-right: 1rem;
  opacity: 0.94;
  object-fit: cover;
  transition: transform 500ms ease-in-out;
  transform: translate(
    ${({ state }) =>
      state === "entering" || state === "entered" ? 0 : "-100vw"}
  );
`;
const StyledTitle = styled(Title)`
  color: white !important;
  width: max-content;
  max-width: 70vw;
  text-shadow: 0 0.3vw 0.9vw black;
  transition: transform 500ms ease-in-out;
  transform: translate(
    ${({ state }) =>
      state === "entering" || state === "entered" ? 0 : "100vw"}
  );
`;
const StyledText = styled(Text)`
  font-size: 1.1rem;
  color: white !important;
  text-shadow: 0 0.3vw 0.9vw black;
  transition: opacity 500ms ease-in-out;
  opacity: ${({ state }) =>
    state === "entering" || state === "entered" ? 1 : 0};
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

class TopSliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondTransitionIn: false
    };
  }

  secondTransitionStart = () => {
    const { secondTransitionIn } = this.state;
    this.setState({ secondTransitionIn: !secondTransitionIn });
  };
  secondTransitionStop = () => {
    const { secondTransitionIn } = this.state;
    this.setState({ secondTransitionIn: !secondTransitionIn });
  };

  render() {
    const { inProp, logo, title, description, videoSrc } = this.props;
    return (
      <StyledSlide>
        <StyledAnimateDiv>
          <Transition
            in={inProp}
            timeout={500}
            onEntered={this.secondTransitionStart}
            onExiting={this.secondTransitionStop}
          >
            {state => (
              <StyledWrapper>
                <StyledLogoImage src={logo} state={state} />
              </StyledWrapper>
            )}
          </Transition>
          <Transition in={this.state.secondTransitionIn} timeout={500}>
            {state => (
              <div>
                <StyledTitle level={3} state={state}>
                  {title}
                </StyledTitle>
                <StyledText string state={state}>
                  {description}
                </StyledText>
              </div>
            )}
          </Transition>
        </StyledAnimateDiv>
        <StyledImageOverlay />
        <StyledBackground
          onPlaying={this.props.startAnimation}
          muted
          loop
          autoPlay
          src={videoSrc}
        />
      </StyledSlide>
    );
  }
}

export default TopSliderComponent;
