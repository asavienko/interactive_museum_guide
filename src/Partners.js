import React from "react"
import {Divider} from "antd";
import MapContainer from "./MapContainer";
import styled from "styled-components";

const StyledMapContainer = styled.div`
    //position: absolute;
    //left: 16%;
    //transform: translate(-50%, -50%)
   height: 350px;
`;
// disturb 2 div in absolut

const WrappPartnersBox = styled.div`
     
`;
const MapStyle = {
    position: `relative !important`,
    width: `97% !important`,
    height: `24vw`,
    margin: `20px`,
    display: `inherit`,
    overflow: `hidden`,
    border: `2px solid rgba(24, 144, 255, 0.27)`,
};


class Partners extends React.Component {


    render() {
        return <WrappPartnersBox>
            <Divider>Наши партнеры</Divider>
            <StyledMapContainer>
                <MapContainer style={MapStyle}/>
            </StyledMapContainer>

        </WrappPartnersBox>
    }
}

export default Partners