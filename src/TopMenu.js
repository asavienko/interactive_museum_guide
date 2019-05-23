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

function TopMenu() {
  return <StyledMenu mode="horizontal" theme="dark">
    <StyledLogo src={logo}/>
    <Menu.Item key={1}>Гид по музею</Menu.Item>
    <Menu.Item key={2}>Описание</Menu.Item>
    <Menu.Item key={3}>Скачать</Menu.Item>
    <Menu.Item key={4}>FAQ</Menu.Item>
    <Menu.Item key={5}>Наши партнёры</Menu.Item>
  </StyledMenu>
}

export default TopMenu