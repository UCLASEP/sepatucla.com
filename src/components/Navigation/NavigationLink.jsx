import React from 'react';
import {Link} from 'gatsby';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import {GREY80, PRIMARY_GREEN, HOVER_GREEN} from '../../styles/global';

const NavigationLinkContainer = styled.div`
  a {
    text-decoration: none;
    color: ${props => (props.isActive ? PRIMARY_GREEN : GREY80)};
    &:hover {
      color: ${HOVER_GREEN};
    }
  }
`;

const NavigationLink = ({isActive, to, linkText}) => (
  <NavigationLinkContainer isActive={isActive}>
    <Link to={to}>{linkText}</Link>
  </NavigationLinkContainer>
);

NavigationLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavigationLink;
