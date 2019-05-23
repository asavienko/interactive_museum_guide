import React from "react"
import {Divider} from "antd";
import MapContainer from "./MapContainer";
import styled from "styled-components";

const StyledMapContainer = styled.div`
    position: relative;
    height: 90vh;
`;


function Partners() {
  return <div id="partners">
    <Divider>Наши партнеры</Divider>
    <StyledMapContainer>
      <MapContainer/>
    </StyledMapContainer>
  </div>
}

export default Partners