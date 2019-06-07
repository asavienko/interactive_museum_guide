import React from "react";
import MapContainer from "./map/MapContainer";
import styled from "styled-components";
import { Col, Row } from "antd/es/index";
import ListOfPartners from "./map/listOfPartners/ListOfPartners";
import { Divider } from "antd";
import Footer from "../footer/Footer";

const StyledMapContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const StyledDiv = styled.div`
  margin: 1% !important;
  border: 1px solid #e8e8e8;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 46px);
`;

function Partners() {
  return (
    <StyledWrapper id="partners">
      <Divider>Наши партнеры</Divider>
      <StyledDiv>
        <Row type="flex" justify="space-between" gutter={6}>
          <Col span={16}>
            <StyledMapContainer>
              <MapContainer />
            </StyledMapContainer>
          </Col>
          <Col span={8}>
            <ListOfPartners />
          </Col>
        </Row>
      </StyledDiv>
      <Footer />
    </StyledWrapper>
  );
}

export default Partners;
