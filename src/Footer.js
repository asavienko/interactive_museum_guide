import React from "react";
import styled from "styled-components";

const WrapperFooter = styled.div`
  background: #001529;
  height: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
`;

function Footer() {
  return <WrapperFooter>copyright © 2019</WrapperFooter>;
}

export default Footer;
