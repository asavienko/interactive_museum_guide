import React from "react"
import {Divider} from "antd";
import MapContainer from "./MapContainer";
import styled from "styled-components";

const StyledMapContainer = styled.div`
    position: absolute;
    left: 16%;
    transform: translate(-50%, -50%)
`;

class Partners extends React.Component {


  render() {
    return <div>
      <Divider>Наши партнеры</Divider>
      <StyledMapContainer>
        <MapContainer style={{
          width: "70vw",
          height: "70vw",}}/>
      </StyledMapContainer>
    </div>
  }
}

export default Partners