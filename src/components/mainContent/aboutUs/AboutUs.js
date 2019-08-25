import React from "react";
import styled from "styled-components";
import { Col, Divider, Row } from "antd/lib/index";
import picture1 from "../../../assets/images/preview/picture1.jpg";
import picture2 from "../../../assets/images/preview/picture2.jpg";
import picture3 from "../../../assets/images/preview/picture3.jpg";
import picture4 from "../../../assets/images/preview/picture4.jpg";
import picture5 from "../../../assets/images/preview/picture5.jpg";
import picture6 from "../../../assets/images/preview/picture6.jpg";
import picture7 from "../../../assets/images/preview/picture7.jpg";
import picture8 from "../../../assets/images/preview/picture8.jpg";
import picture9 from "../../../assets/images/preview/picture9.jpg";
import picture10 from "../../../assets/images/preview/picture10.jpg";

const BoxDescription = styled.div`
  margin: 15px;
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

function AboutUs() {
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
        </Row>
      </BoxDescription>

      <WrapGallery>
        <GalleryItem src={picture4} alt="image not found" />
        <GalleryItem src={picture1} alt="image not found" />
        <GalleryItem src={picture5} alt="image not found" />
        <GalleryItem src={picture6} alt="image not found" />
        <GalleryItem src={picture7} alt="image not found" />
        <GalleryItem src={picture3} alt="image not found" />
        <GalleryItem src={picture8} alt="image not found" />
        <GalleryItem src={picture9} alt="image not found" />
        <GalleryItem src={picture10} alt="image not found" />
        <GalleryItem src={picture2} alt="image not found" />
      </WrapGallery>
    </div>
  );
}

export default AboutUs;
