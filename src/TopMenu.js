import React from "react"
import styled from "styled-components"
import {Menu} from "antd";

//import smartPhone from "./images/smartPhone.svg"


const StyledTopMenu = styled.div`
    background: #000;
    width: 100%;
    height: 45px;
    display: flex;
   
`
const StyledTopLogo = styled.div`

`
const StyledTopWrapp = styled.div`
display: flex;
    align-items: center;
`
const StyledTopItems = styled.ul`
    list-style: none;
    display: flex;
    color: #fff;
   
`

const StyledTopItemsParagraph = styled.li`
   
    padding: 0px 5px 0px 5px;
    font-size: 17px;
    height: 43px;
    display: flex;
    align-items: center;
    
    :hover {
    background: #0000ff73;
    cursor: pointer;
    transition: 1s;
  }
`


const StyledTopLogoImages = styled.img`
    width: 50px;
    background: #ffffff;
    height: 45px;
`
const StyledTopSocial = styled.div`
    
`
const StyledTopSocialIcons = styled.div`
    
`;

class TopMenu extends React.Component {
// todo add smartPhone image to git and download it
    render() {
        return <Menu mode="horizontal" theme="dark">
                <Menu.Item>Гид по музею</Menu.Item>
                <Menu.Item>Описание</Menu.Item>
                <Menu.Item>Скачать</Menu.Item>
                <Menu.Item>FAQ</Menu.Item>
                <Menu.Item>Контакты</Menu.Item>
                <Menu.Item>Наши партнёры</Menu.Item>
            </Menu>

            }
            }

            export default TopMenu