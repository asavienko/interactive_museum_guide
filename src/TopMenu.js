import React from "react"
import {Menu} from "antd";
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
    position: static;
    left: 0;
    right: 0;
`;

class TopMenu extends React.Component {

  goToAnchor = (e) => {
    const element = document.getElementById(e.key);
    element.scrollIntoView({behavior: "smooth"})
  };

  render() {
    return <StyledMenu mode="horizontal" theme="dark">
      <StyledLogo src={logo}/>
      <Menu.Item key={"topslider"} onClick={this.goToAnchor}>Гид по музею</Menu.Item>
      <Menu.Item key={"description"} onClick={this.goToAnchor}>Описание</Menu.Item>
      <Menu.Item key={"download"} onClick={this.goToAnchor}>Скачать</Menu.Item>
      <Menu.Item key={"partners"} onClick={this.goToAnchor}>Наши партнёры</Menu.Item>
      <Menu.Item key={"faq"} onClick={this.goToAnchor}>FAQ</Menu.Item>
    </StyledMenu>
  }
}

//
// <AnchorLink href={"#topslider"}>Гид по музею</AnchorLink></Menu.Item>
// <Menu.Item key={2}><AnchorLink href={"#description"}>Описание</AnchorLink></Menu.Item>
// <Menu.Item key={3}><AnchorLink href={"#download"}>Скачать</AnchorLink></Menu.Item>
// <Menu.Item key={4}><AnchorLink href={"#faq"}>FAQ</AnchorLink></Menu.Item>
// <Menu.Item key={5}><AnchorLink href={"#partners"}>

export default TopMenu