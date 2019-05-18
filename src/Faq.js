import React from "react"
import styled from "styled-components";
import {Divider, Collapse, Icon} from "antd";

 const WrappBoxFaq = styled.div`
 background: '#faf7eb',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
`;

const Panel = Collapse.Panel;

const textOne = `
  test test
`;
const textTwo = `
  123456
`;
const textThree = `
 ggggggg
`;
const textFour = `
  aaaaa
`;


const CustomPanelStyle = styled(Panel)`
 border-radius: 4px;
 overflow: hidden;
 margin-bottom: 24;
 background: #faf7eb;
`;


class Faq extends React.Component{



  render() {
    return <div>
        <Divider>FAQ</Divider>
        <WrappBoxFaq>

            <Collapse
                bordered={true}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
                <CustomPanelStyle header="какие устройста поддерживают приложение? " key="1" >
                    <p>{textOne}</p>
                </CustomPanelStyle>
                <CustomPanelStyle header="Использование MuseumGuide на мобильных" key="2" >
                    <p>{textTwo}</p>
                </CustomPanelStyle>
                <CustomPanelStyle header="История посищеения и понравившихся экспонатов" key="3" >
                    <p>{textThree}</p>
                </CustomPanelStyle>
                <CustomPanelStyle header="Настроить получение оповещаний" key="3" >
                    <p>{textFour}</p>
                </CustomPanelStyle>
            </Collapse>
        </WrappBoxFaq>
    </div>
  }
}

export default Faq