import React from "react"
import {Row, Timeline} from 'antd';
import styled from "styled-components"
import pic12 from "./images/pic12.jpg"

const Advantages = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    :hover { color: #1890ff;}
`;

const SectionAdvantages = styled.div`
    background-image: url(${pic12});
    background-repeat: no-repeat;
    background-size: cover;
        padding-top: 30px;
`;


class Description extends React.Component {

    render() {
        return <div>


            <SectionAdvantages>
                <Advantages>
                    <p>Наши преимущества</p>
                </Advantages>
                <Row type="flex" justify="center" align="middle">
                    <Timeline>
                        <Timeline.Item>Эксклюзивность</Timeline.Item>
                        <Timeline.Item>Экономия времени</Timeline.Item>
                        <Timeline.Item>Возможность самостоятельно узнавать всю информацию</Timeline.Item>
                        <Timeline.Item>Вы сможете выставить для себя приоритеты по программе
                            достопримечательностей</Timeline.Item>
                        <Timeline.Item>Возможность скачать аудиокнигу, изображения, узнать новости
                            искуства</Timeline.Item>
                        <Timeline.Item>Возможность запоминать понравившиеся места</Timeline.Item>

                    </Timeline>
                </Row>
            </SectionAdvantages>
        </div>

    }
}

export default Description