import React from "react";
import styled from "styled-components";

const FooterText = styled.div`
  position: absolute;
  bottom: 0;
`;

function Footer() {
  return (
    <FooterText>
      <h4>Copyrightⓒ2024. Peter Hong. All rights reserved. </h4>
    </FooterText>
  );
}

export default Footer;
