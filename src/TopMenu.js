import React from "react"
import {Menu} from "antd";
import AnchorLink from "react-anchor-link-smooth-scroll";

class TopMenu extends React.Component {

  render() {
    return <Menu mode="horizontal" theme="dark">
      <Menu.Item><AnchorLink href={"#topslider"}>Гид по музею</AnchorLink></Menu.Item>
      <Menu.Item><AnchorLink href={"#description"}>Описание</AnchorLink></Menu.Item>
      <Menu.Item><AnchorLink href={"#download"}>Скачать</AnchorLink></Menu.Item>
      <Menu.Item><AnchorLink href={"#faq"}>FAQ</AnchorLink></Menu.Item>
      <Menu.Item><AnchorLink href={"#partners"}>Наши партнёры</AnchorLink></Menu.Item>
    </Menu>
  }
}

export default TopMenu