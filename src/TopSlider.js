import React from "react"
import {Carousel} from 'antd';

import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";

class TopSlider extends React.Component {

    render() {
        return <div>
            <Carousel autoplay>

                    <img src={pic8} alt=""/>

                    <img src={pic9} alt=""/>

            </Carousel>
        </div>
    }
}

export default TopSlider