import React from "react"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styled from "styled-components";

const style = {
  width: '500px',
  height: '500px'
};


export class MapContainer extends React.Component {
  constructor(props){
    super(props)
  }
  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }
  render() {

    return (
      <Map
        google={this.props.google}
        onReady={this.fetchPlaces.bind(this)}

        zoom={14}
        style={style}
        initialCenter={{
          lat: 50.004985,
          lng: 36.231091
        }}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
      >
        <Marker />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPRn3rb3qvcFAqdi6_CwaxQgmiWZg-iL4",

})(MapContainer)