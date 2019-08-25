import React from "react";
import styled from "styled-components";

const WrapperFooter = styled.div`
  background: #001529;
  height: 40px;
  color: #fff;
  padding: 10px;
  margin-top: auto;
`;

function Footer() {
  return <WrapperFooter>copyright © 2019</WrapperFooter>;
}

export default Footer;
