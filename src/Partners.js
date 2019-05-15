import React from "react"
import {Divider} from "antd";
import MapContainer from "./MapContainer";

class Partners extends React.Component{


  render() {
    return <div>
      <Divider>Наши партнеры</Divider>
      <MapContainer/>
    </div>
  }
}

export default Partners