import React from "react"
import Map from "./Map";

class Partners extends React.Component{

  render() {
    return <div>
      <Map
      googleMapUrel = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCPRn3rb3qvcFAqdi6_CwaxQgmiWZg-iL4&callback=initMap"
      />
    </div>
  }
}

export default Partners