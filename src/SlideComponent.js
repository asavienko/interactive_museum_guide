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
const StyledSlide = styled.div`
position: relative;
`;
const StyledBrainImage = styled.img`
    width: 9rem;
    height: 9rem;
    opacity: 0.94;
`;
const StyledTitle = styled(Title)`
width: max-content;
max-width: 70vw;
`;
const StyledText = styled(Text)`
`;
const StyledAnimateDiv = styled.div`
position: absolute;
display: flex;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 90vw;
`;
const StyledWraper = styled.div`
position: relative;
`

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStylesImage = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
};

const transitionStylesTitle = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
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
          {state => (<StyledWraper>
              < StyledBrainImage src={brainLogo} style={{
                ...defaultStyle,
                ...transitionStylesImage[state]
              }}/>
            </StyledWraper>
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
                ...defaultStyle,
                ...transitionStylesText[state]
              }}>
              быстро и точно определяет экспонат и находит информацию о нем
            </StyledText>
          </div>)}
        </Transition>
      </StyledAnimateDiv>
      <StyledImage src={pic8} alt=""/>
    </StyledSlide>
  }
}

export default SlideComponent;