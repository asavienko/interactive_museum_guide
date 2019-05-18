import React from "react"
import {Carousel, Typography} from 'antd';
import styled from "styled-components";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import SlideComponent from "./SlideComponent";

const StyledImage = styled.img`
  width:100%;
  height: 100vh;
  object-fit: cover;
`;

class TopSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionIn: false,
    }
  }
  startAnimation=()=>{
    setTimeout(()=>this.setState({firstTransitionIn: true}),300)
  };

  setTransitionIn = () => {
    this.setState({firstTransitionIn: true});
  };
  setTransitionOut = () => {
    this.setState({firstTransitionIn: false});
  };


  render() {
    return <div>
      <Carousel

        afterChange={this.setTransitionIn}
        beforeChange={this.setTransitionOut}
      >
        <SlideComponent inProp={this.state.firstTransitionIn} startAnimation={this.startAnimation}/>
        {/*<StyledImage src={pic9} alt=""/>
        <StyledImage src={pic1} alt=""/>
      <StyledImage src={pic10} alt=""/>
      <StyledImage src={pic2} alt=""/>*/}
      </Carousel>
    </div>
  }
}

export default TopSlider