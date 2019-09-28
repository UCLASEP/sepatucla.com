import React from 'react';
import {Link} from 'gatsby';

import styled from 'styled-components';
// import PropTypes from 'prop-types'

import {MARGINS} from '../styles/global';

import Logo from '../../assets/images/sep-logo-large.png';

const Container = styled.div`
  margin: ${MARGINS.m} ${MARGINS.l};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 8px;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 31px;
`;

const NavigationBar = () => (
  <Container>
    <Section>
      <LogoImg src={Logo} alt="SEP Logo" />
      <div>Sigma Eta Pi</div>
    </Section>
    <Section>
      <Link to="/members">Members</Link>
      <Link to="/entrepreneurship">Entrepreneurship</Link>
      <Link to="/recruitment">Recruitment</Link>
    </Section>
  </Container>
);

NavigationBar.propTypes = {
  // activePage: PropTypes.string.isRequired,
};

export default NavigationBar;
