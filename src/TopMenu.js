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

const StyledMenu = styled(Menu)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    
  ${prop => prop.isVisible} && {
    top: -50px;
    transition: 0.5s;
  } ;
  ${prop => !prop.isVisible} && {
    top: 0;
    transition: 0.5s;
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
    return <StyledMenu
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
  }
}

export default TopMenu