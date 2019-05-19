import React from "react"
import styled from "styled-components";

const WrappFooter = styled.div`
background: #001529;
height: 40px;
color: #fff;
display: flex;
align-items: center;
padding: 10px;

`;

class Footer extends React.Component {

    render() {
        return <div>
            <WrappFooter>
                copyright © 2019
            </WrappFooter>
        </div>
    }
}

export default Footer