import React from "react"
import {Menu} from "antd";

class TopMenu extends React.Component {

    render() {
        return <Menu mode="horizontal" theme="dark">
            <Menu.Item>Гид по музею</Menu.Item>
            <Menu.Item>Описание</Menu.Item>
            <Menu.Item>Скачать</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
            <Menu.Item>Наши партнёры</Menu.Item>
        </Menu>
    }
}

export default TopMenu