import React from 'react';
import styled from 'styled-components';

import Logo from '../../../assets/images/sep-logo-large.png';

import {PADDING, GREY90} from '../../styles/global';

const PageFooter = () => (
  <FooterContainer>
    <LogoSection>
      <img src={Logo} alt="SEP Logo" />
      Sigma Eta Pi
    </LogoSection>
  </FooterContainer>
);

const FooterContainer = styled.div`
  padding: ${PADDING.xl} ${PADDING.l};
  display: flex;
  background-color: ${GREY90};
  color: white;
`;

const LogoSection = styled.div`
  display: flex;
`;

export default PageFooter;
