import React from "react"
import {Divider, Carousel} from 'antd';

import styled from "styled-components";


const BoxRewive = styled.div`
display: flex !important;
justify-content: center;
width:97% !important;
color: white;
background-color: #d0e9eac2;
margin: 20px;

`;


class Rewiews extends React.Component {
    state = {
        dotPosition: 'top',
    };

    handlePositionChange = ({target: {value: dotPosition}}) => this.setState({dotPosition});


    render() {

        const {dotPosition} = this.state;


        return <div>

            <Divider>Отзывы</Divider>


            <Carousel dotPosition={dotPosition} autoplay>

                <BoxRewive>
                    <div>1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos necessitatibus perferendis
                        quam rerum temporibus.
                    </div>
                </BoxRewive>

                <BoxRewive>
                    <div>1</div>
                </BoxRewive>

                <BoxRewive>
                    <div>1</div>
                </BoxRewive>

            </Carousel>


        </div>
    }
}

export default Rewiews