import React from "react"
import {Divider} from "antd";
import MapContainer from "./MapContainer";
import styled from "styled-components";

const StyledMapContainer = styled.div`
    height: 90vh;
`;

const MapStyle = {
  width: '90%',
  height: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

class Partners extends React.Component {

  render() {
    return <div>
      <Divider>Наши партнеры</Divider>
      <StyledMapContainer>
        <MapContainer style={MapStyle}/>
      </StyledMapContainer>

    </div>
  }
}

export default Partners