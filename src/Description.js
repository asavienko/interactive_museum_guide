import React from "react"
import {Divider, Row, Timeline} from 'antd';
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

    background-image: linear-gradient(0deg,rgba(0,21,45,0.6),rgba(0,21,45,0.6)),url(${pic12});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 30px;
`;
const StyledDivider = styled(Divider)`
 & span {
 color: rgba(255,255,255, 0.7);
 }
`;
const StyledItem = styled(Timeline.Item)`
& .ant-timeline-item-content {
 color: rgba(255,255,255, 0.7);
}
`;

class Description extends React.Component {

  render() {
    return <div id="description">
      <SectionAdvantages>
        <Advantages>
          <StyledDivider>Наши преимущества</StyledDivider>
        </Advantages>
        <Row type="flex" justify="center" align="middle">
          <Timeline>
            <StyledItem>
              Эксклюзивность
            </StyledItem>
            <StyledItem>
              Экономия времени
            </StyledItem>
            <StyledItem>
              Возможность самостоятельно узнавать всю информацию
            </StyledItem>
            <StyledItem>
              Вы сможете выставить для себя приоритеты по программе
              достопримечательностей
            </StyledItem>
            <StyledItem>
              Возможность скачать аудиокнигу, изображения, узнать новости
              искуства
            </StyledItem>
            <StyledItem>
              Возможность запоминать понравившиеся места
            </StyledItem>
          </Timeline>
        </Row>
      </SectionAdvantages>
    </div>

  }
}

export default Description