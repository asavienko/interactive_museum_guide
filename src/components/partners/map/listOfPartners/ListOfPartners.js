import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { List } from "antd";

const StyledImage = styled.img`
  width: 10vw;
  max-height: 10vw;
  object-fit: cover;
  margin-right: 2%;
  border: 1px solid #e8e8e8;
`;
const StyledList = styled(List)`
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
`;

function ListOfPartners({ listOfPartners }) {
  console.log(listOfPartners);
  return (
    <StyledList
      dataSource={listOfPartners}
      renderItem={place => {
        const imgUrl = place && Array.isArray(place.photos) && place.photos[0].getUrl();
        return (
          <List.Item
            key={place.id}
            extra={<StyledImage alt="logo" src={imgUrl} />}
          >
            <List.Item.Meta title={place.name} />
          </List.Item>
        );
      }}
    />
  );
}

const mapStateToProps = state => ({
  listOfPartners: state.partners.listOfPartners
});

export default connect(mapStateToProps)(ListOfPartners);
