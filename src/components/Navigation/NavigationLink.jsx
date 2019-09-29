import React from 'react';
import {Link} from 'gatsby';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import {GREY80, PRIMARY_GREEN, HOVER_GREEN} from '../../styles/global';

// import ExternalLinkIcon from '../../../assets/images/icons/external-link.svg';

const NavigationLinkContainer = styled.div`
  a {
    text-decoration: none;
    color: ${props => (props.isActive ? PRIMARY_GREEN : GREY80)};
    &:hover {
      color: ${HOVER_GREEN};
    }
  }
`;

// const ExternalLinkImg = styled.img`
//   height: 12px;
//   padding: 0;
//   margin: 0;
// `

const NavigationLink = ({isActive, to, linkText, external}) => (
  <NavigationLinkContainer isActive={isActive}>
    {external ? (
      <a href={to} rel="noopener noreferrer" target="_blank">
        {linkText}
      </a>
    ) : (
      <Link to={to}>{linkText}</Link>
    )}
  </NavigationLinkContainer>
);

NavigationLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

NavigationLink.defaultProps = {
  external: false,
};

export default NavigationLink;
