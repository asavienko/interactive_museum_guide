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
const BoxInformationOne = styled(Col)`

`;



class Download extends React.Component {

    render() {
        return <div>
            <Divider>О нас</Divider>
            <BoxDescription>
                <Row type="flex" justify="center" align="middle">
                    <BoxInformationOne span={12} order={1}>Перспективы в искусстве и истории искусства, от классического искусства до
                        современной архитектуры.</BoxInformationOne>
                    <Col span={12} order={2}>Статьи обновляются учеными, педагогами, специалистами по цифровым технологиям,
                        приглашенными докладчиками, стажерами и многими другими. с целью объединения оцифрованных версий историко-художественных материалов,
                        разбросанных по разным веб-сайтам, для облегчения их поиска.</Col>
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