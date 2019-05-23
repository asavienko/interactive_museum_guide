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
    position: static;
    left: 0;
    right: 0;
`;


function TopMenu() {
  return <StyledMenu mode="horizontal" theme="dark">
    <StyledLogo src={logo}/>
    <Menu.Item key={1}><AnchorLink href={"#topslider"}>Гид по музею</AnchorLink></Menu.Item>
    <Menu.Item key={2}><AnchorLink href={"#description"}>Описание</AnchorLink></Menu.Item>
    <Menu.Item key={3}><AnchorLink href={"#download"}>Скачать</AnchorLink></Menu.Item>
    <Menu.Item key={4}><AnchorLink href={"#faq"}>FAQ</AnchorLink></Menu.Item>
    <Menu.Item key={5}><AnchorLink href={"#partners"}>Наши партнёры</AnchorLink></Menu.Item>
  </StyledMenu>
}

export default TopMenu