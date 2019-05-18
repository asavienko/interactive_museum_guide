import React from "react"
import Home from "./Home";
import Description from "./Description";
import Download from "./Download";
import Rewiews from "./Rewiews";
import Partners from "./Partners";
import TopSlider from "./TopSlider";


class MainContent extends React.Component {

  render() {
    return <div>
      <TopSlider/>
      <Home/>
      <Description/>
      <Download/>
      <Partners/>
      <Rewiews/>
    </div>
  }
}

export default MainContent