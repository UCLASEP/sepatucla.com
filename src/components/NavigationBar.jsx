import React from 'react';
import {Link} from 'gatsby';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import ROUTES from '../routes';

import {MARGINS, GREY80, PRIMARY_GREEN} from '../styles/global';

import Logo from '../../assets/images/sep-logo-large.png';

const NavigationLink = ({isActive, link, to}) => (
  <LinkContainer active={isActive}>
    <Link to={to}>{link}</Link>
  </LinkContainer>
);

NavigationLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const NavigationBar = ({activePage}) => (
  <Container>
    <Section>
      <LogoImg src={Logo} alt="SEP Logo" />
      <div>Sigma Eta Pi</div>
    </Section>
    <Section>
      {Object.entries(ROUTES).map(([key, linkObj]) => (
        <NavigationLink
          key={key}
          isActive={activePage === linkObj.slug}
          to={linkObj.to}
          link={linkObj.linkText}
        />
      ))}
    </Section>
  </Container>
);

NavigationBar.propTypes = {
  activePage: PropTypes.string.isRequired,
};

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

const LinkContainer = styled.div`
  a {
    color: ${props => (props.active ? PRIMARY_GREEN : GREY80)};
    text-decoration: none;
  }
`;

export default NavigationBar;
