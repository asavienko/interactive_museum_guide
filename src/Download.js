import React from "react"
import styled from "styled-components";
import {Col, Divider, Row} from "antd";
import {Button, Radio, Icon} from 'antd';

const BoxDescription = styled.div`
margin: 15px;
`;
const BoxButton = styled.div`
margin: 15px  0;
`;

class Download extends React.Component {

    render() {
        return <div>
            <Divider>О нас</Divider>
            <BoxDescription>
                <Row type="flex" justify="center" align="middle">
                    <Col span={12} order={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                        adipisci alias animi aperiam commodi consequuntur corporis delectus doloremque esse iure labore
                        laboriosam magnam maxime, mollitia necessitatibus nesciunt non nulla officiis omnis perspiciatis
                        placeat possimus quaerat quam quod rerum sunt tempore totam vero voluptatibus. Adipisci
                        dignissimos fugiat illum porro quam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        accusantium
                        adipisci alias animi aperiam commodi consequuntur corporis delectus doloremque esse iure labore
                        laboriosam magnam maxime, mollitia necessitatibus nesciunt non nulla officiis omnis perspiciatis
                        placeat possimus quaerat quam quod rerum sunt tempore totam vero voluptatibus. Adipisci
                        dignissimos fugiat illum porro quam.</Col>
                    <Col span={12} order={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                        adipisci alias animi aperiam commodi consequuntur corporis delectus doloremque esse iure labore
                        laboriosam magnam maxime, mollitia necessitatibus nesciunt non nulla officiis omnis perspiciatis
                        placeat possimus quaerat quam quod rerum sunt tempore totam vero voluptatibus. Adipisci
                        dignissimos fugiat illum porro quam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        accusantium
                        adipisci alias animi aperiam commodi consequuntur corporis delectus doloremque esse iure labore
                        laboriosam magnam maxime, mollitia necessitatibus nesciunt non nulla officiis omnis perspiciatis
                        placeat possimus quaerat quam quod rerum sunt tempore totam vero voluptatibus. Adipisci
                        dignissimos fugiat illum porro quam.</Col>
                </Row>
            </BoxDescription>
            <BoxButton>
                <Row type="flex" justify="center" align="middle">
                    <Button type="primary" icon="download" size='large'>
                        Скачать
                    </Button>
                </Row>
            </BoxButton>

            <div>
                <div><img src="" alt=""/>
                    <p></p>
                </div>
                <div><img src="" alt=""/>
                    <p></p>
                </div>
                <div><img src="" alt=""/>
                    <p></p>
                </div>
                
            </div>



        </div>
    }
}

export default Download