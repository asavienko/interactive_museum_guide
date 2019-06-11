import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { List } from "antd";
import noImagePng from "../../../../assets/images/no-image-png.png";
import _ from "lodash";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

const StyledImage = styled.img`
  width: 10vw;
  height: 10vw;
  margin: 0 5px;
  border: 1px solid #e8e8e8;
`;
const StyledList = styled(List)`
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
`;

class ListOfPartners extends React.Component {
  state = {
    isLoading: true
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !_.isEqual(prevProps.listOfPartners, this.props.listOfPartners) &&
      this.props.listOfPartners &&
      this.props.listOfPartners.length > 0
    ) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { listOfPartners, getSelectedPlace, clearSelectedPlace } = this.props;
    return (
      <StyledList
        loading={this.state.isLoading}
        dataSource={listOfPartners}
        renderItem={place => {
          const imgUrl =
            place && Array.isArray(place.photos) && place.photos[0].getUrl();
          return (
            <List.Item
              key={place.id}
              extra={<StyledImage alt="logo" src={imgUrl || noImagePng} />}
              onMouseEnter={() => getSelectedPlace(place)}
              onMouseLeave={clearSelectedPlace}
            >
              <List.Item.Meta title={place.name} />
            </List.Item>
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  listOfPartners: state.partners.listOfPartners
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfPartners);
