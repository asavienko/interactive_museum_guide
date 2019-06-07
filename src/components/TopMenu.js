import React from "react";
import { Menu } from "antd/lib/index";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

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
  goToAnchor = e => {
    const element = document.getElementById(e.key);
    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <StyledMenu mode="horizontal" theme="dark">
        <StyledLogo src={logo} />
        <Menu.Item>
          <Link to="/">Гид по музею</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/download">Скачать</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/partners">Наши партнёры</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/faq">FAQ</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/add-museum">Добавить музей</Link>
        </Menu.Item>
      </StyledMenu>
    );
  }
}

export default TopMenu;
