import React from "react"
import styled from "styled-components"
import smartPhone from "./images/smartPhone.svg"


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
    
`
const menuElements = [{name: "Гид по музею", attributes: {name: "#id"}}, "Описание", "Скачать", "FAQ", "Контакты", "Наши партнёры"];


class TopMenu extends React.Component {

    render() {
        return <StyledTopMenu>
            <StyledTopLogo><StyledTopLogoImages src={smartPhone} alt="logo"/></StyledTopLogo>
            <StyledTopWrapp>
                <StyledTopItems>
                    {menuElements.map(item=> <StyledTopItemsParagraph>{item} </StyledTopItemsParagraph>)}
                </StyledTopItems>
            </StyledTopWrapp>

        </StyledTopMenu>
    }
}

export default TopMenu