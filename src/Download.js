import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Col, Divider, Row } from "antd";
import picture1 from "./images/preview/picture1.jpg";
import picture2 from "./images/preview/picture2.jpg";
import picture3 from "./images/preview/picture3.jpg";
import picture4 from "./images/preview/picture4.jpg";
import picture5 from "./images/preview/picture5.jpg";
import picture6 from "./images/preview/picture6.jpg";
import picture7 from "./images/preview/picture7.jpg";
import picture8 from "./images/preview/picture8.jpg";
import picture9 from "./images/preview/picture9.jpg";
import picture10 from "./images/preview/picture10.jpg";

const BoxDescription = styled.div`
  margin: 15px;
`;
const BoxButton = styled(Button)`
  margin: 15px 0;
  width: 100%;
`;
const WrapGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const GalleryItem = styled.img`
  min-width: 100px;
  width: 220px;
  height: 230px;
  object-fit: cover;
  margin: 5px;
`;

function Download() {
  return (
    <div id="download">
      <Divider>О нас</Divider>
      <BoxDescription>
        <Row type="flex" justify="center" align="middle">
          <Col span={12} order={1}>
            Перспективы в искусстве и истории искусства, от классического
            искусства до современной архитектуры.
          </Col>
          <Col span={12} order={2}>
            Статьи обновляются учеными, педагогами, специалистами по цифровым
            технологиям, приглашенными докладчиками, стажерами и многими
            другими. с целью объединения оцифрованных версий
            историко-художественных материалов, разбросанных по разным
            веб-сайтам, для облегчения их поиска.
          </Col>
          <Col span={12} order={3}>
            <BoxButton type="primary" icon="download" size="large">
              Скачать
            </BoxButton>
          </Col>
        </Row>
      </BoxDescription>

      <WrapGallery>
        <GalleryItem src={picture1} alt="" />
        <GalleryItem src={picture2} alt="" />
        <GalleryItem src={picture3} alt="" />
        <GalleryItem src={picture4} alt="" />
        <GalleryItem src={picture5} alt="" />
        <GalleryItem src={picture6} alt="" />
        <GalleryItem src={picture7} alt="" />
        <GalleryItem src={picture8} alt="" />
        <GalleryItem src={picture9} alt="" />
        <GalleryItem src={picture10} alt="" />
      </WrapGallery>
    </div>
  );
}

export default Download;
