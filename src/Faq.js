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
  Приложение поддерживают все современные устройства,  Mac/ПК , Android, iPhone, Windows Phone.
  чтоб установить расширение перейдите по ссылке указанной выше. Ресурс адаптированный под мобильные устройства веб-сайт, который будет работать через мобильный браузер. 
`;
const textTwo = `
приложение, разработанное под iOS или Android (мы работаем только с этими платформами). Мобильное приложение независимо от сайта, у него есть свои уникальные особенности. 
`;
const textThree = `
 Вы можете просмотреть список музеев с известными экспонатами, добавить в избранные места, находясь в помещении музея -  навести на интересующую картину или предмет и получить в своем мобильном полныый каталог информациии , аудиозаписей, изображений,   похожих экспонатов и их геолокации.
`;
const textFour = `
 Приложение для телефонов на базе iOS можно скачать в магазине App Store. Если ваш смартфон работает на базе Android — скачайте приложение в Google Play.
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
                <CustomPanelStyle header="История посищения и понравившихся экспонатов" key="3" >
                    <p>{textThree}</p>
                </CustomPanelStyle>
                <CustomPanelStyle header="Где можно скачать приложение?" key="3" >
                    <p>{textFour}</p>
                </CustomPanelStyle>
            </Collapse>
        </WrappBoxFaq>
    </div>
  }
}

export default Faq