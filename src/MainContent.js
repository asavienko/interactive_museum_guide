import React from "react"
import Home from "./Home";
import Description from "./Description";
import Download from "./Download";
import Reviews from "./Reviews";
import Faq from "./Faq";
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
      <Reviews/>
      <Faq/>
    </div>
  }
}

export default MainContent