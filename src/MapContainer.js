import React from "react"
import {GoogleApiWrapper, Map} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const searchProperties = {
      mode: 'no-cors', keyword: "Музей", location: {
        lat: 50.004985,
        lng: 36.231091
      }, radius: 4000,
    };
    const infoWindowProperties = {
      pixelOffset: new google.maps.Size(-24, 0)
    };

    const service = new google.maps.places.PlacesService(map);
    const infowindow = new google.maps.InfoWindow(infoWindowProperties);
    service.nearbySearch(searchProperties, (result) => result.forEach(function (place) {
        createMarker(place);
      })
    );

    const createMarker = function (place) {
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      const markerProperties = {
        map: map,
        icon: icon,
        position: place.geometry.location
      };

      let marker = new google.maps.Marker(markerProperties);

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    };
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onReady={this.fetchPlaces}
        zoom={14}
        initialCenter={{
          lat: 50.004985,
          lng: 36.231091
        }}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        style={{
          width: '90%',
          height: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPRn3rb3qvcFAqdi6_CwaxQgmiWZg-iL4",
  language: "ru"
})(MapContainer)