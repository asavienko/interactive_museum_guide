import React from "react";
import styled from "styled-components";
import { Divider, Collapse, Icon } from "antd";

const textOne = `
  Приложение поддерживают все современные устройства,  Mac/ПК , Android, iPhone, Windows Phone.
  чтоб установить расширение перейдите по ссылке указанной выше. Ресурс адаптированный под мобильные устройства веб-сайт, который будет работать через мобильный браузер. 
`;
const textTwo = `
Приложение, разработанное под iOS или Android (мы работаем только с этими платформами). Мобильное приложение независимо от сайта, у него есть свои уникальные особенности. 
`;
const textThree = `
 Вы можете просмотреть список музеев с известными экспонатами, добавить в избранные места, находясь в помещении музея -  навести на интересующую картину или предмет и получить в своем мобильном полныый каталог информациии , аудиозаписей, изображений,   похожих экспонатов и их геолокации.
`;
const textFour = `
 Приложение для телефонов на базе iOS можно скачать в магазине App Store. Если ваш смартфон работает на базе Android — скачайте приложение в Google Play.
`;

const StyledBoxFaq = styled.div`
  padding: 10px;
  width: 100%;
`;

function Faq() {
  const Panel = Collapse.Panel;
  return (
    <div id="faq">
      <Divider>FAQ</Divider>
      <StyledBoxFaq>
        <Collapse
          bordered={true}
          defaultActiveKey={"1"}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header="Какие устройста поддерживают приложение? " key="1">
            <p>{textOne}</p>
          </Panel>
          <Panel header="Использование MuseumGuide на мобильных" key="2">
            <p>{textTwo}</p>
          </Panel>
          <Panel header="История посищения и понравившихся экспонатов" key="3">
            <p>{textThree}</p>
          </Panel>
          <Panel header="Где можно скачать приложение?" key="4">
            <p>{textFour}</p>
          </Panel>
        </Collapse>
      </StyledBoxFaq>
    </div>
  );
}

export default Faq;
