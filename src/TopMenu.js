import React from "react"
import styled from "styled-components"

const StyledTopMenu = styled.div`
background: #000;
width: 100%;
 height: 45px;
`
const StyledItemMenu = styled.div`

`

class TopMenu extends React.Component {

    render() {
        return <StyledTopMenu>
            <StyledItemMenu><img src="" alt="logo"/></StyledItemMenu>
        </StyledTopMenu>
    }
}

export default TopMenu