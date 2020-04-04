import React from 'react';
import {Link} from 'gatsby';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavigationDropdown from './NavigationDropdown';
import NavigationLink from './NavigationLink';

import ROUTES from '../../routes';

import {MARGINS, BLACK} from '../../styles/global';

import Logo from '../../../assets/images/sep-logo-large.png';

const NavigationLinkWrapper = ({activePage, linkText, to, options, slug}) => (
  <div>
    {options.length > 0 ? (
      <NavigationDropdown
        activePage={activePage}
        options={options}
        text={linkText}
      />
    ) : (
      <NavigationLink
        isActive={activePage === slug}
        to={to}
        linkText={linkText}
      />
    )}
  </div>
);

NavigationLinkWrapper.propTypes = {
  activePage: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  slug: PropTypes.string,
};

NavigationLinkWrapper.defaultProps = {
  to: null,
  slug: null,
};

const NavigationBar = ({activePage}) => (
  <Container>
    <Section>
      <Link
        style={{display: 'flex', 'text-decoration': 'none', color: `${BLACK}`}}
        to="/"
      >
        <LogoImg src={Logo} alt="SEP Logo" />
        <div>Sigma Eta Pi</div>
      </Link>
    </Section>
    <Section>
      {Object.entries(ROUTES).map(([key, linkObj]) => (
        <NavigationLinkWrapper
          key={key}
          activePage={activePage}
          to={linkObj.to}
          options={linkObj.options}
          linkText={linkObj.linkText}
          slug={linkObj.slug}
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

export default NavigationBar;
