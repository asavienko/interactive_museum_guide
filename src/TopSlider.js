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

  runTransition = (prev , next) => {
    console.log(prev , next)
  };
  onChange = (c, n) => {
    console.log(c, n);
    this.setState({transitionIn: !!n})
  };


  render() {
    return <div>
      <Carousel
        autoplay
        /*afterChange={() => this.runTransition(true)}*/
        /*beforeChange={this.runTransition}>*/
        beforeChange={this.onChange}>
        <SlideComponent inProp={this.state.transitionIn} key={1}/>
        <SlideComponent inProp={this.state.transitionIn} key={2}/>
        {/*<StyledImage src={pic9} alt=""/>
        <StyledImage src={pic1} alt=""/>
      <StyledImage src={pic10} alt=""/>
      <StyledImage src={pic2} alt=""/>*/}
      </Carousel>
    </div>
  }
}

export default TopSlider