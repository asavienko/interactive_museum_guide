import React from "react"
import {Menu} from "antd";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import logo from "./images/logo.svg"

const StyledLogo = styled.img`
height: 40px;
width: 40px;
order: -1;
`;
const HoverComponent = styled.div`
 position: fixed;
 height: 46px;
 left: 0;
 right: 0;
 top: 0;
 z-index: 30;
 
`;
const animationDuration = "0.4s";
const StyledMenu = styled(Menu)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
  ${HoverComponent}:hover &{
    top: 0;
    transition: ${animationDuration};
  }
  ${prop => prop.isVisible} && {
    top: -50px;
    transition: ${animationDuration};
  } ;
  ${prop => !prop.isVisible} && {
    top: 0;
    transition: ${animationDuration};
  };

`;


class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revScrollPosition: window.pageYOffset,
      isVisible: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const {prevScrollPosition} = this.state;
    const currentScrollPosition = window.pageYOffset;
    const isVisible = currentScrollPosition < prevScrollPosition;
    this.setState({
      prevScrollPosition: currentScrollPosition,
      isVisible
    });
  };

  render() {
    return <HoverComponent>
      <StyledMenu
        mode="horizontal"
        theme="dark"
        isVisible={this.state.isVisible}
      >
        <StyledLogo src={logo}/>
        <Menu.Item key={1}><AnchorLink href={"#topslider"}>Гид по музею</AnchorLink></Menu.Item>
        <Menu.Item key={2}><AnchorLink href={"#description"}>Описание</AnchorLink></Menu.Item>
        <Menu.Item key={3}><AnchorLink href={"#download"}>Скачать</AnchorLink></Menu.Item>
        <Menu.Item key={4}><AnchorLink href={"#faq"}>FAQ</AnchorLink></Menu.Item>
        <Menu.Item key={5}><AnchorLink href={"#partners"}>Наши партнёры</AnchorLink></Menu.Item>
      </StyledMenu>
    </HoverComponent>
  }
}

export default TopMenu