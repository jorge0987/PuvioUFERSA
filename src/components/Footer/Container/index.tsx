import React from "react";
import styled from "styled-components";
import FooterContent from "../Content";

const FooterContainer = styled.footer`
  background-color: #414141;

  @media (min-width: 768) {
    display: flex;
    justify-content: center;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent />
    </FooterContainer>
  );
}

export default Footer;
