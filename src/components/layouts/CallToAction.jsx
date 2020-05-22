/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationLink from '../Navigation/NavigationLink';

import {
  MARGINS,
  HEADER_FONT_SIZES,
  PRIMARY_GREEN,
  GREY80,
} from '../../styles/global';

const Container = styled.div`
  width: 100%;
  margin: ${MARGINS.s} 0;
  max-height: 500px;
  text-align: center;
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: 600;
  letter-spacing: -1px;
  align-items: center;
  justify-content: center;
  color: ${GREY80};
  margin: ${MARGINS.s} auto;
  max-width: 500px;
`;

const Border = styled.div`
  height: 3px;
  width: 90%;
  background-color: #f2f2f2;
  margin: ${MARGINS.m} auto;
`;

const ViewSelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 218px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;
  margin: 40px auto ${MARGINS.l} auto;
  color: white;
  background-color: ${PRIMARY_GREEN};
`;

const PageHero = ({title, buttonTitle}) => (
  <Container>
    <Border />
    <Title>{title}</Title>
    <ViewSelectorButton
      onClick={() => <NavigationLink>to: {'/careers'},</NavigationLink>}
      role="button"
      tabIndex={0}
    >
      {buttonTitle}
    </ViewSelectorButton>
  </Container>
);

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default PageHero;
