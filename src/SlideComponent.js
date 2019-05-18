import brainLogo from "./images/brainLogo.svg";
import pic8 from "./images/pic8.jpg";
import {Typography} from "antd";
import React, {useState} from "react";
import styled from "styled-components";
import {Transition} from "react-transition-group";

const {Title, Text} = Typography;

const StyledImage = styled.img`
  width:100%;
  height: 100vh;
  object-fit: cover;
`;
const StyledImageOverlay = styled.div`
  width:100%;
  height: 100vh;
  background: rgba(0,0,0, 0.5);
  position: absolute;
`
const StyledSlide = styled.div`
position: relative;
`;
const StyledBrainImage = styled.img`
    width: 9rem;
    height: 9rem;
    opacity: 0.94;
`;
const StyledTitle = styled(Title)`
color: white!important;
width: max-content;
max-width: 70vw;
`;
const StyledText = styled(Text)`
font-size: 1.13rem;
color: #ffd395!important;
`;
const StyledAnimateDiv = styled.div`
position: absolute;
display: flex;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 90vw;
z-index: 10;
`;
const StyledWrapper = styled.div`
position: relative;
`

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
};
const imageTransitionStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
};

const transitionStylesLogo = {
  entering: {transform: 'translate(0vw)'},
  entered: {transform: 'translate(0vw)'},
  exiting: {transform: 'translate(-50vw)'},
  exited: {transform: 'translate(-50vw)'},
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

  componentDidMount() {
    this.props.startAnimation()
  }

  secondTransitionStart = () => {
    this.setState({secondTransitionIn: true})
  };


  render() {
    const {inProp} = this.props;
    return <StyledSlide>
      <StyledAnimateDiv>
        <Transition in={inProp} timeout={duration} onEntered={this.secondTransitionStart}>
          {state => (<StyledWrapper>
              < StyledBrainImage src={brainLogo} style={{
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
              Интелектуальное распознование экспонатов
            </StyledTitle>
            <StyledText
              string
              style={{
                ...imageTransitionStyle,
                ...transitionStylesText[state]
              }}>
              быстро и точно определяет экспонат и находит информацию о нем
            </StyledText>
          </div>)}
        </Transition>
      </StyledAnimateDiv>
      <StyledImageOverlay/>
      <StyledImage src={pic8} alt=""/>
    </StyledSlide>
  }
}

export default SlideComponent;