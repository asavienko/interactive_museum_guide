import React from "react";
import myMarker from "../../../assets/images/marker.svg";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { setListOfPartners } from "../../../actions/partners";
import _ from "lodash";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;
    const searchProperties = {
      mode: "no-cors",
      keyword: "Музей",
      location: {
        lat: 50.004985,
        lng: 36.231091
      },
      radius: 4000
    };
    const infoWindowProperties = {
      pixelOffset: new google.maps.Size(-24, 0)
    };
    const service = new google.maps.places.PlacesService(map);
    const infowindow = new google.maps.InfoWindow(infoWindowProperties);

    service.nearbySearch(searchProperties, result => {
      this.props.setPartnersList(result);
      result.forEach(place => {
        createMarker(place);
      });
    });

    const createMarker = place => {
      const icon = {
        url: myMarker,
        size: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      };
      const markerProperties = {
        map: map,
        icon: icon,
        position: place.geometry.location
      };

      let marker = new google.maps.Marker(markerProperties);
      google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    };
  };
  selectedPlaceGeometry = selectedPlace => {
    return (
      !_.isEmpty(selectedPlace) && {
        lat: selectedPlace.geometry.location.lat(),
        lng: selectedPlace.geometry.location.lng()
      }
    );
  };

  render() {
    const { selectedPlace, google, setLoadingMap } = this.props;
    return (
      <Map
        google={google}
        onReady={this.fetchPlaces}
        setIsLoadingMap={setLoadingMap}
        zoom={14}
        initialCenter={{
          lat: 50.004985,
          lng: 36.231091
        }}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        gestureHandling={"cooperative"}
      >
        {!_.isEmpty(selectedPlace) && (
          <Marker
            position={this.selectedPlaceGeometry(selectedPlace)}
            visible={!_.isEmpty(selectedPlace)}
            icon={myMarker}
          />
        )}
      </Map>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPartnersList(places) {
      dispatch(setListOfPartners(places));
    }
  };
};
const mapStateToProps = state => ({
  listOfPartners: state.partners.listOfPartners
});

const mapComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPRn3rb3qvcFAqdi6_CwaxQgmiWZg-iL4",
  language: "ru"
})(mapComponent);
